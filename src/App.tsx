import './App.css'
import GenerateCV from './pages/GenerateCV'

function App() {

  return (
    <div className='md:px-32 mt-4'>
      <h1 className='text-primary font-bold text-2xl'>Online CV Generator</h1>
      <div className='mt-10'>
        <GenerateCV />
      </div>
    </div>
  )
}

export default App
