var somepromis = new Promise((resolve,reject) =>{
    setTimeout(() => {
        // resolve("hey , it working");    
        reject("is not working");
    }, 2500);

    
});


somepromis.then((message) => {
    console.log(message);
}, (error) => {
    console.log(error);
})


console.log("aooke")