import React from 'react'
import InputForm from '../components/HomePageComponents/InputForm.tsx'
import { useDispatch, useSelector } from 'react-redux'
import PreviewModal from '../components/PreviewModal.tsx'
import { closeModalAction } from '../redux/filesSlice.js'
import PdfList from '../components/PdfList.tsx'
import Logo from '../components/Logo.tsx'
import ShowPreviewBtn from '../components/ShowPreviewBtn.tsx'
import Footer from '../components/Footer.tsx'

// import PdfPreview from '../components/HomePageComponents/PdfPreview.tsx'

interface MyState {
  files: {
      showModal: boolean
      currentFile: string
  }
}

export default function HomePage() {
  const dispatch = useDispatch()
  const {showModal, currentFile} = useSelector((state: MyState)=>state.files)
  return (
    <>
        <Logo/>
        <div className='flex'>
        <InputForm/>
          <div className='flex flex-col p-10 gap-5'>
            {currentFile && <ShowPreviewBtn/>}
            <PdfList/>
          </div>
        </div>
        <Footer/>
        <PreviewModal show={showModal} onShow onClose={()=>dispatch(closeModalAction())}/>
    </>
  )
}


