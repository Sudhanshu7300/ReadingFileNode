const fs = require("fs");

fs.writeFile('Myfile.txt'," Today is Awesome day :)",(error)=>{
console.log("file is created")
});

fs.appendFile("Myfile.txt", "today 16april 2021",(err)=>{
});

fs.readFile("Myfile.txt","UTF-8",(err,data)=>{
    console.log("data");
});

fs.writeFile('bio.txt' ,"defedf",(err)=>{
});

fs.unlink("./bio.txt",(err)=>{
console.log("delete");
});

