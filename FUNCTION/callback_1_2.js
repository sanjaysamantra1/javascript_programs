var fs = require("fs");

fs.readFile("./file1.txt", function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
});

console.log("I am statement from line-11")
