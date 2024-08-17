import React from 'react'
import { useDispatch } from 'react-redux'
import { openModalAction } from '../redux/filesSlice'

export default function ShowPreviewBtn() {
    const dispatch = useDispatch()
    return (
        <button className='text-white p-5 rounded-lg bg-red-600 hover:bg-red-700 transition-colors' onClick={()=>dispatch(openModalAction())}>Show generated document</button>
    )
}
