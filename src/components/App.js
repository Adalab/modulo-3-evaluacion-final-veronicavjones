/* SECCIÓN DE IMPORT */

// - De React
// - Nuestros
// - Sass
import { useEffect, useState } from 'react';
import getDataApi from '../services/api';
import '../styles/App.scss';
import CharacterList from './CharacterList';
import Filters from './Filters';
// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  const [characterList, setCharacterList] = useState([]);
  const [houseFilter, setHouseFilter] = useState('gryffindor');
  useEffect(() =>{
    getDataApi().then((cleanData) =>{
      console.log(cleanData);
      setCharacterList(cleanData);
    });

  },[]);

  const handleFilterHouse = (value) =>{
    setHouseFilter(value);
  };

  const characterFiltered = characterList.filter((eachCharacter) =>
    
     houseFilter.toLowerCase() === eachCharacter.house.toLowerCase()
    
  )
  console.log(characterFiltered);
  return(
    <>
      <h1 className='title--big'>Harry Potter</h1>
         <main className='main'>
           <Filters handleFilterHouse ={handleFilterHouse}/>
           <CharacterList characterList={characterFiltered}/>
           
         </main> 
    </>
  );
  }  
 

/* EXPORT DEL COMPONENTE */
export default App;
