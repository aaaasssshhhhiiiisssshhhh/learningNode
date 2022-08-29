const http = require("http");
const fs = require("fs").promises;

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  fs.readFile(__dirname + "/index.html")
    .then((contents) => {
      res.setHeader("Content-Type", "Text/html");
      res.writeHead(200);
      res.end(contents);
      console.log("request received");
    })
    .catch((err) => {
      console.log(err);
      res.writeHead(500);
      res.end(`<h1>page you requested was not found</h1>`);
      return;
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port}`);
});
