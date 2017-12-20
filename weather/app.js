 
const yars     = require("yargs");
const axios    = require("axios");

const argv = yars
.options({
    a: {
        demand: true,
        alisa : "address",
        describe : "address to fetch weather",
        string: true
    }
})
.help()
.alias("help","h")
.argv;


var encodeaddress = encodeURIComponent(argv.address);
var geo_url       = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeaddress}`;
var APIKEY        = "c329456af7f7b253ec79c11d97d8e1ef";
axios.get(geo_url)
.then((response) =>{
    if(response.data.status === "ZERO_RESULTS")
        throw new error("No data found")
    
        var        lat  =  response.data.results[0].geometry.location.lat;
        var        lng  =  response.data.results[0].geometry.location.lng;
        console.log(response.data.results[0].formatted_address)
        var weather_url = `https://api.darksky.net/forecast/${APIKEY}/${lat},${lng}`
        
        return axios.get(weather_url);
})
.then((response) => {
    
    var temp    = response.data.currently.temperature;
    var summary = response.data.currently.summary;
    console.log(`summary : ${summary}\ntemperature : ${temp}`)
})
.catch((error) => {
    if(error.code === "ENOTFOUND")
        console.log("Unable to connect to the API servrer")
    else
        console.log(error.message);
})
 