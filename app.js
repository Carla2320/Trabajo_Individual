const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ac7eaef281e24b3e15ae43d9c6ee567d&units=metric`);
    //console.log(resp.data.Results[0]);
    return resp.data.main.temp;
}
const hello = getClima(-0.225219, -78.5248)
console.log(hello);