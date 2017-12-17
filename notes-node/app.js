

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js")
console.log("start of application")
var user   = os.userInfo();

var commend  = process.argv[2]
if(commend === "list"){
    console.log("lit all viedo");
}else if(commend === "read"){
    console.log("read the note");

}else if(commend === "remove"){
    console.log("remove note");
}