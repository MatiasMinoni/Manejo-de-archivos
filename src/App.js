import './App.css';
import NavBar from './NavBar';

import ItemListContainer from './ItemListContainer';



function App() {
  return (
    
    <div className="App">

    <NavBar />

<ItemListContainer items="Teclado" />
<ItemListContainer items="Mouse" />



    </div>
  );
}

export default App;