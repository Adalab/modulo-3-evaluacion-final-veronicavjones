function CharacterCard ({eachCharacter}) {
    return (
        <li className="card"> 
          <a href=".">
            <img className="card_img" src={eachCharacter.image} alt="foto de hermione" title="Hermione Granger"></img>
            <h4 className="card_title">{eachCharacter.name}</h4>
            <p className="card_species">{eachCharacter.species}</p>
         </a>
            
        </li>
    );

}
export default CharacterCard;