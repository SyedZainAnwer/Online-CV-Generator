import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenerateCV from './pages/GenerateCV';
import { GlobalContextProvider } from './context/AppContext'
import BasicTemplate from './components/Templates/BasicTemplate';

function App() {
  return (
    <div className='md:px-32 mt-4'>
      <h1 className='text-primary font-bold text-2xl'>Online CV Generator</h1>
      <div className='mt-8'>
        <GlobalContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<GenerateCV />}/>
              <Route path='/templates' element={<BasicTemplate />} />
            </Routes>
          </BrowserRouter>
        </GlobalContextProvider>
      </div>
    </div>
  )
}

export default App
