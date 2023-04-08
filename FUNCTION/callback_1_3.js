var fs = require("fs");

//callback hell
fs.readFile("file1.txt", function readDataFromFile1(err, data1) {
  if (err) {
    return console.error(err);
  }
  fs.readFile("file2.txt", function readDataFromFile2(err, data2) {
    if (err) {
      return console.error(err);
    }
    fs.writeFile("./file3.txt", `${data1} & ${data2}`, function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log("Write operation successful");
    });
  });
});

console.log("I am from line-21");
