const hbs = require('hbs');
const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ac7eaef281e24b3e15ae43d9c6ee567d&units=metric`);
    return resp.data.main.temp;
}


/////////////////////////////////////// 

const getCiudadLatLon = async(nombre) => {

    const ciudad = encodeURI(nombre);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Quito`,
        headers: { 'X-RapidAPI-Key': '8ac05538ebmsh1d8d2bb9ae49d50p1737a9jsn3064fa337c89' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No existe resultados para ${nombre}`);
    }

    const data = resp.data.Results[0];

    return data

    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     }).catch(err => {
    //         console.log("ERROR:", err);
    //     });

}


// Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

// hbs.registerHelper('capitalizar', (texto) => {
//     let palabras = texto.split(' ');
//     palabras.forEach((palabra, idx) => {
//         palabras[idx] = palabra.charAt(0).toUpperCase() +
//             palabra.slice(1).toLowerCase();
//     });

//     return palabras.join(' ');
// });
hbs.registerHelper('clima', () => {
    const clima = getClima(-0.225219, -78.5248);
    return clima;
})

hbs.registerHelper('ubicacion', () => {
    const ubic = getCiudadLatLon('Quito');
    return ubic;
})


hbs.registerHelper('clima1', () => {
    const clima = getClima(-3.7025600, 40.4165000);
    return clima;
})

hbs.registerHelper('ubicacion1', () => {
    const ubic = getCiudadLatLon('Madrid');
    return ubic;
})