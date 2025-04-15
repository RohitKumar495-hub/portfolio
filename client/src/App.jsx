import { Toaster } from 'react-hot-toast'
import './App.css'
import HomePage from './pages/HomePage'

function App() {


  return (
    <>
      <HomePage/>
      <div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
    </>
  )
}

export default App
