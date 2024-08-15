import React from 'react'
import { useState } from 'react';
import PdfPreview from './PdfPreview.tsx';
import axios from 'axios'



export default function InputForm() {
    // const [text, setText] = useState('')
    // const [title, setTitle] = useState('')
    const [test, setTest] = useState<Object>({})

        const fetchPdf = async() =>{
            await axios.post('http://95.217.134.12:4010/create-pdf?apiKey=78684310-850d-427a-8432-4a6487f6dbc4', {
                text: "Test text 121241"
              })
              .then(function (response) {
                console.log(response)
                setTest(response)
              })
              .catch(function (error) {
                console.log(error);
              });
        }

        

        const handleSubmit = (e) =>{
            e.preventDefault()
            fetchPdf()
            console.log(test, 'adas')
            // const data = new jsPDF('p', 'pt', 'letter')
            // data.text(text, 10, 10)
        }
        
        // const changeTitleHandler = (e) =>{
        //     setTitle(e.target.value)
        // }

        // const changeTextHandler = (e) =>{
        //     setText(e.target.value)
        // }

    

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>
                <input  className='border-4 border-black' type="text" />
                <textarea  className='border-4 border-black' name='txt'/>
                <button>Generate</button>
            </label>
            {Object.values(test).length > 0 && <PdfPreview file={test}/>}
        </form>
    )
}
