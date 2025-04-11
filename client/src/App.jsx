import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
  <>
  
    <Home/>
    <div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  </>
  )
}

export default App
