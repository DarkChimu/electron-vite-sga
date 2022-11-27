var fs = require("fs");
var path = require("path");
// In newer Node.js versions where process is already global this isn't necessary.
var process = require("process");

var moveFrom = "../../src";

// Loop through all the files in the temp directory
fs.readdir(moveFrom, function (err, files) {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach(function (file, index) {
    // Make one pass and make the file complete
    var fromPath = path.join(moveFrom, file);

    fs.stat(fromPath, function (error, stat) {
      if (error) {
        console.error("Error stating file.", error);
        return;
      }

      if (stat.isFile()) {
        // if you need to do something with the file, use fs.readFile here
      } else if (stat.isDirectory()) {
        fs.readdir(fromPath, (err, subFiles) => {
          if (err) {
            return;
          }

          if (!subFiles.length) {
            fs.writeFile(fromPath + "/.gitkeep", "", function (err) {
              if (err) throw err;
            });
          }
        });
      }
    });
  });
  console.log("All done!");
});
