import { useState } from 'react'
import './App.css'
import NavBarra from './components/NavBar/NavBarra.jsx'
import Principal from './components/Main/Principal.jsx'
import Rodape from './components/Footer/Rodape.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBarra/>
    <Principal/>
    <Rodape/>
  
    

    </>
  )
}

export default App
