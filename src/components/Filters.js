import FilterHouse from "./FilterHouse";

function Filters ({handleFilterHouse}){
    return (
        <section className="filter">
            <form>
                <FilterHouse handleFilterHouse={handleFilterHouse}/>
            </form>
        </section>
    
    );
};
export default Filters;