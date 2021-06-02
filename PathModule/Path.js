const path = require ("path");

console.log(path.dirname("/Users/mr.arun/Desktop/Nodejs/PathModule"));
console.log(path.extname("/Users/mr.arun/Desktop/Nodejs/PathModule"));
console.log(path.basename("/Users/mr.arun/Desktop/Nodejs/PathModule"));
console.log(path.parse("/Users/mr.arun/Desktop/Nodejs/PathModule/Path.js"));

const mypath = path.parse("/Users/mr.arun/Desktop/Nodejs/PathModule");
console.log(mypath.name);
console.log(mypath.root);