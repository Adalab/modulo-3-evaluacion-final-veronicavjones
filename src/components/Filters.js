import CharacterSearch from "./CharacterSearch";
import FilterHouse from "./FilterHouse";

function Filters ({handleFilterHouse, setSearchName, search} ){
    return (
        <section className="filter">
            <form>
                <CharacterSearch setSearchName={setSearchName} search={search}/>
                <FilterHouse handleFilterHouse={handleFilterHouse}/>
            </form>
        </section>
    
    );
};
export default Filters;