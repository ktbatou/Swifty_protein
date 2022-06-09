import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {apiRequest} from '../api/apiRequest';

export default function ModulesList() {
  const ligands = useSelector(state => state.ligands.value);
  const navigation = useNavigation();
  if (ligands.length) {
    return (
      <View style={styles.ItemContainer}>
        <FlatList
          data={ligands}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                //apiRequest();
                navigation.navigate('Protein Display');
              }}>
              <Text style={styles.ItemText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.noLigandContainer}>
        <Text style={styles.noLigandText}>No Ligand</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ItemText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#E5E5E5',
    padding: 20,
    marginTop: 24,
    borderRadius: 8,
    // textAlign:'center',
  },
  ItemContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  // noLigandContainer: {
  //   flex: 1,
  //   display: 'flex',
  //   alignItems: 'center',
  // },
  noLigandText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    // color: 'red',
    alignSelf: 'center',
  },
});
