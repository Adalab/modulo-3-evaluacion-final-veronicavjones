function CharacterSearch ({setSearchName, search}) {
    const handleSearch= (ev) =>{
        setSearchName(ev.target.value);

    };
    return(
        <form>Busca por personaje: 
            <input type="text" id="search" onInput={handleSearch} value={search}/>

        </form>
    )
    
}
export default CharacterSearch;