import { Tarjeta }  from "./Tarjeta.js";
const url = 'https://pokeapi.co/api/v2/pokemon/';

window.onload = async()=>{
    await getPokemones();
}


const getPokemones = async() =>{
    const peticion = await fetch(url);
    if (peticion.ok) {
        let tabla = '';
        const data = await peticion.json(); 
        const pokemones  = data.results;
        pokemones.forEach(async (pok,i) => {
            // let img = await getImagen(pok.url);
            const pokecard = new Tarjeta(3, pok.name,pok.url);
            let card = await pokecard.mostrar();
            document.querySelector('#root').innerHTML += card;

        });
    }
}


