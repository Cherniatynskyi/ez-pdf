import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setCurrentFile, openModalAction } from '../redux/filesSlice'
import { FaRegFilePdf } from "react-icons/fa6";
import { useAutoAnimate } from '@formkit/auto-animate/react'


interface ArrObg {
    title: string,
}

interface MyState {
    files: {
        filesList: Array<ArrObg>

    }
}

export default function PdfList() {
    const filesList = useSelector((state: MyState)=> state.files.filesList)
    const dispatch = useDispatch()
    const [listRef] = useAutoAnimate()

    const handleSetCurrentFile = (e: React.MouseEvent<HTMLElement>) =>{
        dispatch(setCurrentFile({title: e.currentTarget.textContent}))
        dispatch(openModalAction())
    }
    return (
        <div>
            <h2 className='text-xl font-bold mt-5'>Your documents:</h2>
            {filesList.length > 0 ?
            <ul className='flex flex-col gap-2 mt-3' ref={listRef}>
                {filesList.map((el, i)=>{
                    return (
                        <li onClick={(e)=>handleSetCurrentFile(e)} className='p-4 w-64 flex items-center justify-between gap-4 border-2 border-transparent rounded-md cursor-pointer hover:border-red-600 transition-colors' key={`${el}${i}`}>
                            <div className='flex items-center gap-2'>
                                <FaRegFilePdf className='text-red-600 text-xl'/>
                                <p>{el.title}</p>
                            </div>
                        </li>
                    )
                })}
            </ul> : <h3 className='text-md mt-2 text-gray-600'>You have no documents in your list</h3>}
        </div>
    )
}
