import {createSlice} from "@reduxjs/toolkit";


export const filesSlice = createSlice({
    name: 'files',
    initialState: {
        currentFile: {},
        filesList: [],
        showModal: false
    },
    reducers:{
        addFile: (state, {payload})=>{
            if(state.filesList.includes(payload)){
                return
            }
            state.filesList = [...state.filesList, payload]
        },
        setCurrentFile: (state, {payload})=>{
            state.currentFile = payload
        },
        openModalAction: (state)=>{
            state.showModal = true
        },
        closeModalAction: (state)=>{
            state.showModal = false
        }
    }
})

export const {setCurrentFile, addFile, openModalAction, closeModalAction} = filesSlice.actions