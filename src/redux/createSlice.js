import {createSlice} from '@reduxjs/toolkit';
import ModulesArr from '../res';

const initialState = {
  value: ModulesArr,
};

function searcher(val) {
  const filter = ModulesArr.filter(lg => {
    return lg.includes(val);
  });
  if (filter.length) return filter;
  else return [];
}

export const ligandSlice = createSlice({
  name: 'ligands',
  initialState,
  reducers: {
    search: (state, prop) => {
      state.value = searcher(prop.payload);
    },
  },
});

export const {search} = ligandSlice.actions;
export default ligandSlice.reducer;
