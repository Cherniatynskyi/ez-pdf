import HomePage from '../pages/HomePage.tsx';
import React from 'react';
import './App.css';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;



function App() {
  
  return (
    <div className="App">
     <HomePage></HomePage>
    </div>
  );
}


export default App;
