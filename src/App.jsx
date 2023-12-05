
import NavBar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <NavBar/>
      <ItemListContainer greeting="Hola Bienvenidos"/>
    </div>
  );
}

export default App
