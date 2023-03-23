function CharacterDetail ({characterFind}) {
    return (
      <>  
        <h2>Detalle del personaje</h2>
        <div className="card"> 
          <a href=".">
            <img className="card_img" src={characterFind.image} alt="foto de hermione" title="Hermione Granger"></img>
            <h4 className="card_title">{characterFind.name}</h4>
            <p className="card_species">{characterFind.species}</p>
         </a>
            
        </div>
       </>  
    );

}
export default CharacterDetail;