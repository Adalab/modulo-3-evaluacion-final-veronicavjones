/* SECCIÓN DE IMPORT */

// - De React
// - Nuestros
// - Sass
import { useEffect } from 'react';
import getDataApi from '../services/api';
import '../styles/App.scss';
// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {

  useEffect(() =>{
    getDataApi().then((cleanData =>{
      console.log(cleanData);
    }));

  },[] )
  return(
    <>
      <h1 className='title--big'>Harry Potter</h1>
    </>
  );
  }  
 

/* EXPORT DEL COMPONENTE */
export default App;
