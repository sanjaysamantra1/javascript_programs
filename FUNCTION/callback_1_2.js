var fs = require("fs");

// Asynchronous read
fs.readFile("input.txt", (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(data.toString());
});

console.log("I am presentt at line-11");
