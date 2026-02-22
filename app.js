const fs = require("fs");
fs.readFile("file.txt", "utf8", function (err, data) {
   if (err) { 
      console.error('Error reading file.txt:', err); 
      return; 
   } 
   console.log(data);
});
console.log("readFile");

fs.writeFile("file.txt", "Hello World!", function (err) {
   if (err) { 
      console.error('Error writing file.txt:', err); 
      return; 
   } 
   console.log("File saved!");
});
console.log("writeFile");

const http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.end();
  })
  .listen(8080);
console.log("webServer");
const https = require("https");
https
  .get("https://jsonplaceholder.typicode.com/posts/1", (resp) => {
    let data = "";
    resp.on("data", (chunk) => {
      data += chunk;
    });
    resp.on("end", () => {
      console.log(JSON.parse(data));
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
console.log("httpRequest");
const myModule = require("./my-module.js");
console.log(myModule.myFunction());
const myPromise = new Promise((resolve, reject) => {
  if (5 > 2) {
    resolve("Success!");
  } else {
    reject("Failure!");
  }
});
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
myFunction();
