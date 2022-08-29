//The http module contains the function to create the server, which we will see later on.
//If you would like to learn more about modules in Node.js
const { ok } = require("assert");
const http = require("http");

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("my first server \n");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port}`);
});

// const gedeee = "ramram";

// const apple = () => {
//   //   console.log(`server is running on http://${host}:${port}`);
//   //   console.log(`server is running on http://${host}:${port}`);
//   console.log(`server is running on`, "port ==> ", port, "host ==>", host);
// };

// server.listen(port, host, apple);
