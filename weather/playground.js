function AsynAdd(a,b){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(typeof a === "number" && typeof b === "number"){
                resolve(a +b);
            }else{
                reject("Arugments not number");
            }    
        }, 2000);
        
    })
}


AsynAdd(1,5)
.then((value)=> {
    return new Promise((t,f) =>{
        if(value >= 10)
            t(value);
        else
            f("too small")
    })
})
.then((value) => {
    console.log(value);
},)
.catch((error) =>{
    console.log(error)
})