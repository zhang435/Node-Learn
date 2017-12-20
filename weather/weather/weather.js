// all the weather stuff coems from here
// https://darksky.net/dev/docs
var request = require("request");
var APIKEY = "c329456af7f7b253ec79c11d97d8e1ef";



function getweather(lng,lat,callback){

    request({
        url  : `https://api.darksky.net/forecast/${APIKEY}/${lat},${lng}`,
        json : true 
    },(error,response,body) => {
        if(error){
            callback("unable to reach darksky");
        }else if(response.statusCode === 400){
            callback("Unable to fetch the weather");
        }else if (response.statusCode === 200) {
            callback(undefined, {
                obj: body
            })
        }
    })
}

module.exports = {
    getweather : getweather
}
