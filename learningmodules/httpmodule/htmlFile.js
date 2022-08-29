const http = require("http");
const fs = require("fs").promises;

const requestListener = function (req, res) {
  fs.readFile(__dirname + "/indexxx.html")
    .then((returnbyread) => {
      console.log(returnbyread);
      // res.setHeader("Content-Type","text/html");
      // res.writeHead (200);
      // res.end (contents);
    })
    .catch((errorbyreturn) => {
      console.log(errorbyreturn);
    });
};

requestListener();
