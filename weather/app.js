 
const yars    = require("yargs");
const geocode = require("./geocode/geocode.js")
const weather = require("./weather/weather.js")


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


geocode.getaddress(argv.a,(error,result) => {
    if(error){
        console.log(error);
    } else {
        console.log(`address: ${result.address}`);
        console.log(`long   : ${result.lng}`);
        console.log(`lat    : ${result.lat}`);
        weather.getweather(result.lat,result.lng, (error,result) {
            if(error){
                console.log("somehting goes wrong during wearther fetching");
            }else {
                console.log(result.obj);
            }
        })
        
    }})
