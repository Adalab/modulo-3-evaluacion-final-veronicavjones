import { Link } from "react-router-dom";
function CharacterCard ({eachCharacter}) {
    return (
        <li className="card"> 
          <Link to={`/character/${eachCharacter.id}`}>
            <img className="card_img" src={eachCharacter.image} alt="foto de hermione" title="Hermione Granger"></img>
            <h4 className="card_title">{eachCharacter.name}</h4>
            <p className="card_species">{eachCharacter.species}</p>
         </Link>
            
        </li>
    );

}
export default CharacterCard;