

var fs = require("fs");


fs.readdir(process.cwd(), function(error, files) {
	console.log("");
	if(files.length == 0) {
		return console.log("\033[31m No files \033[39m\n");
	}

	console.log(" select which file or dir you want to see\n");


	function file(i) {
		var filename = files[i];
		fs.statSync(__dirname + "/" + filename, function(erorr, stat){
			if(stat.isDirectory()){
				console.log("\033[31m"+filename+" \033[39m ");
			}else{
				console.log("\033[90m"+filename+" \033[39m ");

			}

		})

		i++;
		if(i == files.length) {
			console.log("");
			process.stdout.write("enter the file you wan to search : ");
			process.stdin.resume();
		}else{
			file(i);
		}
	}


	file(0);

});