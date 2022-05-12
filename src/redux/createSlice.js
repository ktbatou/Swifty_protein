import { createSlice } from "@reduxjs/toolkit";
import ModulesArr from "../res";


const initialState ={
    value : ModulesArr,
}

async function searcher(val) {
    console.log("this is val ******************",val)
    // return new Promise((resolve, reject) => {

    //     const filter = ModulesArr.filter(lg => {

    //         return lg.includes(val)
    //     })
    //     if (filter.length)
    //     {
    //         resolve(filter).then((value)=>{
    //             console.log(" ================== this is value0", value);
    //             return value;
    //         })
    //     }
    //      else{  
                            
    //         reject("this val not exist").then((value)=>{
    //             console.log(" ================== this is value0", value);
    //             return ModulesArr;
    //         })
    //     }

    // })  
}

export const ligandSlice = createSlice({
    name : 'ligands',
    initialState,
    reducers:{

      search :  (state, prop) =>
      { 
          console.log(prop.payload)
         state.value = searcher(prop.payload)
        
       }

    }
})

export const {search} = ligandSlice.actions
export default ligandSlice.reducer