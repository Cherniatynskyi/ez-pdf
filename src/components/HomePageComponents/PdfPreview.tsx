import React from 'react'
import { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import './viewer.css'
import {useSelector } from 'react-redux';

interface MyState {
    files: {
        currentFile: {
            title: string,
            file: Object
        }
    }
}

export default function PdfPreview() {
    const viewerDiv = useRef<HTMLDivElement>(null)
    const currentFile = useSelector((state: MyState) => state.files.currentFile)
    
    useEffect(() => {
        if(currentFile.title.length < 1){
            return
        }
        console.log(currentFile, "AAA")
        WebViewer({path: 'lib', initialDoc: `/files/${currentFile.title}.pdf`}, 
         viewerDiv.current as HTMLDivElement).then(instance => {
         })
        }, [currentFile])
    return (
            <>
                <div className='webViewer' ref={viewerDiv}>
                </div>
            </>
        )
}
