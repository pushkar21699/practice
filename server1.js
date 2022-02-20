const fs = require("fs");
const url = require("url");
const http = require("http");
//🚀to get req from server first create server🤖//
var server = http.createServer(function (req, res) {
  res.writeHeader(200, { "content-type": "text/html" });
  //   res.write("<h1>Hello</h1>");
  //   res.end();
  var q = url.parse(req.url, true);
  //🙋url.parse() convert string URl to URL Object
  //& seperate out URl string into diff property:value(key:value) form🔚//
  console.log(q.pathname); //index.html
  console.log(q.query); //?nm=prash,age=32

  switch (q.pathname) {
    case "/":
      res.end("Default page");
      break;
    case "/submit":
      var rs = fs.createReadStream("./public/form.html");
      rs.pipe(res);
      break;
    case "/home":
      res.write("<h2>Your form has been submitted successfully<h2>");
      res.end();
      break;
    case "/about":
      res.write("<h2>Hello welcome to About<h2>");
      res.end();
      break;
  }
});
server.listen(3000); //🌏To start the Server🌏//
console.log("Server Started at 3000 port");
