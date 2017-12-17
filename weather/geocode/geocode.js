const request = require("request");
module.exports = {
    getaddress : getaddress
}

function getaddress(url,callback) {
    url = encodeURIComponent(url);
    request({
        url : `http://maps.googleapis.com/maps/api/geocode/json?address=${url}`,
        json : true
        
    }, (error,reponse,body) =>{
        if(error){
            callback(`Unable to connect with Server`);
        }else if(body.results.length == 0){
            callback(`Unable to find the Address : ${url}`);
        }else{
            callback(undefined,{
                address : body.results[0].formatted_address,
                lng     : body.results[0].geometry.location.lat,
                lat     : body.results[0].geometry.location.lng
            })
        }
    })

}