function FilterHouse ({handleFilterHouse}){

    const handleChange =(ev)=>{
        handleFilterHouse(ev.target.value);
    };
    return (
        <>
           <label className="form_label" htmlFor="house">Seleciona la casa:</label>
           <select className="form_input-text" name="house" id="house" onChange={handleChange}>
              <option value="gryffindor">Gryffindor</option>
              <option value="hufflepuff">Hufflepuff</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="slytherin">Slytherin</option>
           </select>
        </>
    
    );
};
export default FilterHouse;