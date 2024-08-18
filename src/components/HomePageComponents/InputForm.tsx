import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setCurrentFile, addFile } from '../../redux/filesSlice.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import jsPDF from 'jspdf';


export default function InputForm() {
    const [text, setText] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [file, setFile] = useState<Object>({})

    const dispatch = useDispatch()

        const fetchPdf = async() =>{
            await axios.post('http://95.217.134.12:4010/create-pdf?apiKey=78684310-850d-427a-8432-4a6487f6dbc4', {
                text: text
              })
              .then(function (response) {
                setFile(response)
                Notify.success('Your PDF document has been generated');
              })
              .catch(function (error) {
                Notify.failure('Unable to convert data');
                console.log(error);
              });
        }

        const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) =>{
            e.preventDefault()
            fetchPdf()
            dispatch(setCurrentFile({title, file}))
            dispatch(addFile({title, file}))
            setTitle('')
            setText('')
            // const data = new jsPDF('p', 'pt', 'letter')  2nd option to convert text => .pdf
            // data.text(text, 10, 10)
        }
        
        const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
            setTitle(e.target.value) //Would be nice to add debounce
        }

        const changeTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
            setText(e.target.value) //Would be nice to add debounce
        }


    return (
        <>
        <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col justify-between w-3/5 p-10 gap-5'>
                <label htmlFor="title">
                    <input onChange={(e)=>changeTitleHandler(e)} value={title} className='px-4 py-3 rounded-md w-2/5 border-2 border-stone-300 ' type="text" name='title' placeholder='document title' />
                </label>
                <label htmlFor="txt">
                    <textarea onChange={(e)=>changeTextHandler(e)} value={text}  className='w-full p-5 resize-none rounded-md min-h-72 border-2 border-stone-300' name='txt' placeholder='Enter text'/>
                </label>
                <button className='text-white bg-red-600 p-5 rounded-lg hover:bg-red-700 transition-colors' type='submit'>Generate</button>
        </form>
        </>
    )
}
