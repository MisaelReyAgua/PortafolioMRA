const url = 'https://pokeapi.co/api/v2/pokemon/';

// Se colocan todas las funciones asincronas

window.onload = async()=>{
    await getPokemones();
}

const getPokemones = async() =>{
    let tabla = '';
    // Metodos GET(por defecto),POST(guardar),PUT(actualiza),DELETE(eliminar)
    const peticion = await fetch(url);
    if (peticion.ok) {
        const data = await peticion.json(); 
        const pokemones  = data.results;
        /*for (let i = 0; i < pokemones.length; i++) {
            pokemones[0].name 
        }*/
        
        pokemones.forEach(async (pok,i) => {
            let img = await getImagen(pok.url);
            tabla = '<tr><td>'+(i+1)+'</td><td>'+pok.name+'</td><td><img height="80" src="'+img+'"/></td></tr>';
            document.querySelector( '#tabla' ).innerHTML+=tabla;

        });
    }
}


const getImagen = async(liga) =>{
    const peticion = await fetch(liga);
    if (peticion.ok) {
        const data = await peticion.json( );
        return(data.sprites.other.dream_world.front_default);
    }
}