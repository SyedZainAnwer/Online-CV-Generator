import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenerateCV from './pages/GenerateCV';
import { GlobalContextProvider } from './context/AppContext'
import BasicTemplate from './pages/SelectTemplate/BasicTemplate';
import CardTemplate from './pages/SelectTemplate/CardTemplate';

function App() {
  return (
    <div className='md:px-32 mt-4'>
      <h1 className='text-primary font-bold text-2xl'>Online CV Generator</h1>
      <div className='mt-8'>
      <GlobalContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<GenerateCV />}/>
              <Route path='/templates' element={<CardTemplate />} />
            </Routes>
          </BrowserRouter>
        </GlobalContextProvider>
      </div>
    </div>
  )
}

export default App
