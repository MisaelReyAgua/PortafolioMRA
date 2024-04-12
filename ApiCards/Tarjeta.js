export class Tarjeta{
    col = 0;
    nombre = '';
    url = '';
    constructor(c,n,u){
        this.col=c;
        this.nombre=n;
        this.url=u;
    }
    
    async mostrar(){
        const info = await getDetalle(this.url);
        let img = info[0];
        let id = info[1];
        let height = info[2];
        let weight = info[3];
        let abilities = info[4];
        let habilidad = '';
        abilities.forEach(ability => {
            habilidad += ability.ability.name + ' ';
        });
        


        let card = '<div class="col-md-'+this.col+' mb-3">';
        card += '<div class="card">';
        card += '<img src="'+img+'" class="card-img-top p-2" height="150">';
        card += '<div class="card-body">';
        card += '<h5 class="card-title text-center text-capitalize">';
        card += '<span class="badge bg-dark">'+id+'</span> ';
        card += ''+this.nombre+'</h5>';
        card += '<p class="card-text">Altura: '+ (height/10) + " m"+'</p>';
        card += '<p class="card-text">Peso: '+(weight/10)+ " kg"+'</p>';
        card += '<p class="card-text">Habilidades: <b>'+habilidad+'<b></p>';
        card += '</div> </div> </div>';
        return card;
    }
}

const getDetalle = async(liga) =>{
    const peticion = await fetch(liga);
    let detalles = [];
    if (peticion.ok) {
        const data = await peticion.json( );
        detalles.push(data.sprites.other.dream_world.front_default);
        detalles.push(data.id);
        detalles.push(data.height);
        detalles.push(data.weight);
        detalles.push(data.abilities);
        return detalles;
    }
}