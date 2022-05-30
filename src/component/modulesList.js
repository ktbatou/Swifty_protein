import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

export default function ModulesList() {
  const ligands = useSelector(state => state.ligands.value);

  if (ligands.length) {
    return (
      <View style={styles.ItemContainer}>
        <FlatList
          data={ligands}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => console.log('module pressed')}>
              <Text style={styles.ItemText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  } else {
    return (
      <View>
        <Text>no Legand</Text>
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
});
