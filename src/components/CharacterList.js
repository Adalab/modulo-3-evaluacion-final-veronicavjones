import CharacterCard from "./CharacterCard";

function CharacterList ({characterList}) {
    const dataHtml = characterList.map((eachCharacter) => {
        return <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id}/>
    })
    return (
        <section className="list">
            <ul className="cards">{dataHtml}</ul>
        </section>
    );
};
export default CharacterList;