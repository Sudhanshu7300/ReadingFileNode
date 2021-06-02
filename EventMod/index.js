const Eventemitter = require("events");

const event = new Eventemitter();



// event.on("sayMyName", ()=>{
//  console.log(" Your name is Sudhanshu");
// });

// event.on("sayMyName", ()=>{
//     console.log(" Your last name Sharma");
//    });

//    event.on("sayMyName", ()=>{
//     console.log(" Your age 22");
//    });
// event.emit("sayMyName");



   //Registering for the event with callback parameter



event.on('checkpage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit("checkpage", 200,"ok");