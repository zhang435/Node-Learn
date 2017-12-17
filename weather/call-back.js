var getUser = (id,callback) => {
    var user = {
        id : id,
        name : "Kevin",
    };
    setTimeout(() => {
        callback(user);
    }, 2000);

    //  callback(user);
}


getUser(10, (userobj) => {
    console.log(userobj); 
})

console.log("waing")