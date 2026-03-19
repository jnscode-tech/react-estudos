import './App.css'
import FirstComponents from './components/FirstComponents'
import MyComponent from './components/MyComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'



function App() {

  return (
    <>
      {/*Importando compontentes
      <MyComponent />
      <FirstComponents />
      <TemplateExpressions />
      <Events />*/
      }

      <div>

        <h1>Pokemon de Água</h1>
        <hr />
        <br />

        <table border="1" >
          <tr>
            <th>Pokemon</th>
            <th>Imagem</th>
            <th>Tipo</th>
          </tr>

          <tr>
            <td>Squirtle</td>
            <td> <img src="Squirtle2.jpg" alt="Squirtle" width="300"/>
            </td>
            <td>Água</td>
          </tr>

          <tr>
            <td>Lapras</td>
            <td>  <img src="Lapras2.jpg" alt="Lapras" width="300"/>
            </td>
            <td>Água</td>
          </tr>


          <tr>
            <td>Psyduck</td>
            <td>  <img src="Psyduck.png" alt="Psyduck" width="300"/>
            </td>
            <td>Água</td>
          </tr>
         </table>
      </div>




    </>
  )
}

export default App
