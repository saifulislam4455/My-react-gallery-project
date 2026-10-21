import { createSlice } from "@reduxjs/toolkit";
const searchslice =createSlice({
    name:'search',
    initialState:{
query:'',
activeTab:'photos',
results:[],
loading :false,
eror:null
    },
    reducers:{
        setquery(state,action){
            state.query=action.payload
        },
        setactiveTab(state,action){
            state.activeTab=action.payload
        },
        setresults(state,action){
            state.results=action.payload
            state.loading=false
        },
        setloading(state){
            state.loading=true
            state.eror=null
        },
         seteror(state,action){
            state.eror=action.payload
            state.loading=false
        },
        clearresults(state){
state.results=[]
        }
        
    }
})
export const { setquery,setactiveTab,setresults,setloading,seteror,clearresults} =searchslice.actions
export default searchslice.reducer 