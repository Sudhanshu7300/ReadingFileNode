const fs = require( "fs");
         // creating a new file
fs.writeFileSync("read.txt","welcome to my page ");

fs.writeFileSync("read.txt"," Its Aj_Anuj,welcome to my page  ");
          // Add data
fs.appendFileSync("read.txt","how are u i am fine thank u ");

     //  Read data another file data
// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);

       // Method call to convert in string  and show the other file data
 const buf_data = fs.readFileSync("read.txt");
org_data = buf_data.toString();
console.log(org_data);


  // to rename the file
fs.renameSync("read.txt","readwrite.txt");
