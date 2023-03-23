import user from '../images/user.png';

const getDataApi = () =>{
    return fetch('https://hp-api.onrender.com/api/characters')
    .then((response)=> response.json())
    .then((data) => {
        const cleanData = data.map((eachCharacter) =>{
            return {
                name: eachCharacter.name,
                species: eachCharacter.species,
                image: eachCharacter.image || user,
                id: eachCharacter.id,
                house: eachCharacter.house,
                status: eachCharacter.alive,
                gender: eachCharacter.gender,
                

            };
        });
        return cleanData;
    });
};
export default getDataApi;