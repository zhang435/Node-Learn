const request = require("request");
module.exports = {
    getaddress : getaddress
}

var getaddress = (address) => {
     url = encodeURIComponent(url);   

     request({
         url  : `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
         json : true
     },(error,response,body) => {
         return new Promise((resolve,reject) =>{
            if(error){
                reject(`Unable to connect with Server`);
            } else if(body.results.length == 0){
                reject("Reload page , or location does not exsit");
            }else{
                resolve({
                    address : body.results[0].formatted_address,
                    lng     : body.results[0].geometry.location.lat,
                    lat     : body.results[0].geometry.location.lng
                    })
                }
            }
        )
    })
}

