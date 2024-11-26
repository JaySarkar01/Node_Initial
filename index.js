// // ------------values from another file start------------
// import app from "./app.js"; // Use for ES Module
// const app = require('./app.js')
// console.log(app.x, " ", app.y);
// // ----------------values from another file end-------------

// // ----------chalk start----------
// import chalkfun from './chalkcolor.js';
// chalkfun();
// // ----------chalk end-----------

// // -----------------file system start-----------------

// import fs from "fs";

// fs.writeFileSync("hello.txt", "This file was created with fs");
// // -----------------file system end-------------------

// // ---------------create server start -------------
// import http from "http";

// http
//   .createServer((req, res) => {
//     res.write("Hello, this is Jay");
//     res.end();
//   })
//   .listen(4500, () => {
//     console.log("Server is running on http://localhost:4500");
//   });
// // -------------------create server end--------------


// --------------create simple API start-------------
// import startServer from './creatAPI.js';
// startServer();

// --------------create simple API end--------------

// ----------------input from command line start--------------
// import inp from "./getting_input_from_command_line.js";
// inp();
// ----------------inout from command line end----------------

// ----------------file list start--------------//
// import listFile from "./file_list.js";
// listFile();
//-----------------file list end----------------//

// ------------crud in file system start--------------
// const crud = require('./crud');
// crud();
// ----------------crud in file system end--------------