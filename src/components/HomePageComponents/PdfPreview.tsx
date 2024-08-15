import React from 'react'
import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';



export default function PdfPreview({file}) {
    
    return (
            <>
                <div>
                    <Document file={file}>
                        <Page pageNumber={1}/>
                    </Document>
                    <p>pages 12</p>
                </div>
            </>
        )
}
