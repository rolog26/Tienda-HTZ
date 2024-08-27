import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div>
        <NavBar />
        <ItemListContainer greeting='Hola, muy pronto agregaremos nuestros productos!' />
    </div>
  )
}

export default App
