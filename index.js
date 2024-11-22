// ------------values from another file start------------
import app from "./app.js"; // Use for ES Module
console.log(app.x, " ", app.y);
// ----------------values from another file end-------------

// ----------chalk start----------
import chalk from "chalk";
console.log(chalk.bgBlackBright("this is chalk package"));
// Combine styled and normal strings
console.log(chalk.blue("Hello") + " World" + chalk.red("!"));

// Compose multiple styles using the chainable API
console.log(chalk.blue.bgRed.bold("Hello world!"));

// Pass in multiple arguments
console.log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// Nest styles
console.log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// Nest styles of the same type even (color, underline, background)
console.log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);
// ----------chalk end-----------

// -----------------file system start-----------------

import fs from "fs";

fs.writeFileSync("hello.txt", "This file was created with fs");
// -----------------file system end-------------------

// ---------------create server start -------------
import http from "http";

http
  .createServer((req, res) => {
    res.write("Hello, this is Jay");
    res.end();
  })
  .listen(4500, () => {
    console.log("Server is running on http://localhost:4500");
  });
// -------------------create server end--------------

