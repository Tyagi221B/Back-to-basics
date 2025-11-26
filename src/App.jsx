import './App.css'
import Header from './components/Header'

function App() {

  return (
    <div className='flex flex-col gap-4 justify-center  items-center min-h-screen'>
    <div className='text-2xl text-red-500'>Hi Asmit Time to reboot.</div>
    <Header styling = "text-red-500"/>
    </div>
  )
}

export default App
