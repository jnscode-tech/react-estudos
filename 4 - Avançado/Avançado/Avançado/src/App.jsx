import { useState } from 'react'
import './App.css'
import Lapras from './assets/Lapras.png'
import Psyduck from './assets/Psyduck.png'
import Squirtle from './assets/Squirtle.png'
import UseState from './components/UseState'

function App() {
  return (
    <>
      {/* Importando componentes */}
      <UseState />

      <h1>Pokemon de Água</h1>
      <hr />
      <br />
      <hr />
      <br />

      <img src={Lapras} alt="Lapras" width="150" />
      <br /><hr />

      <img src={Psyduck} alt="Psyduck" width="150" />
      <br /><hr />

      <img src={Squirtle} alt="Squirtle" width="150" />
      <br /><hr />
    </>
  )
}

export default App