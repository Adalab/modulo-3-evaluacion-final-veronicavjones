/* SECCIÓN DE IMPORT */

// - De React
// - Nuestros
// - Sass
import { useEffect, useState } from 'react';
import { matchPath, Route, Routes, useLocation } from 'react-router-dom';
import getDataApi from '../services/api';
import '../styles/App.scss';
import CharacterDetail from './CharacterDetail';
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

  const [search, setSearch]= useState('');

  const setSearchName = (value)=>{
    setSearch(value)
  }
  const characterFiltered = characterList.filter((eachCharacter) =>
    
     houseFilter.toLowerCase() === eachCharacter.house.toLowerCase()
    
  ).filter((eachCharacter) =>
     eachCharacter.name.toLowerCase().includes(search)
  )
       
  console.log(characterFiltered);
  const {pathname} = useLocation()
  
  const dataUrl = matchPath('/character/:id', pathname);
  

  const characterId = dataUrl !== null? dataUrl.params.id : null

  const characterFind = characterFiltered.find((eachCharacter)=>eachCharacter.id === characterId)
  

 
  return(
    <>
       <h1 className='title--big'>Harry Potter</h1>
         <main className='main'>
            <Routes>
             
             <Route 
               path="/" element={ 
                 <> 
                  
                   <Filters handleFilterHouse ={handleFilterHouse} setSearchName={setSearchName} search={search}/>
                   <CharacterList characterList={characterFiltered}/>
                 </>
               }
             ></Route>
             <Route path='/character/:id' element= {<CharacterDetail characterFind={characterFind}/>}/>
           </Routes>  
           
           
           
         </main> 
   </>
  );
  }  
 

/* EXPORT DEL COMPONENTE */
export default App;
