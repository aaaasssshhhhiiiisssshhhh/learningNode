const http = require("http");
const fs = require("fs").promises;

const host = "localhost";
const port = 8000;

//Serving an HTML Page From a File
// const requestListener = function (req, res) {
//   fs.readFile(__dirname + "/index.html")
//     .then((contents) => {
//       res.setHeader("Content-Type", "Text/html");
//       res.writeHead(200);
//       res.end(contents);
//       console.log("request received");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.writeHead(500);
//       res.end(`<h1>page you requested was not found</h1>`);
//       return;
//     });
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//   console.log(`server is running on http://${host}:${port}`);
// });

// serving html efficently

const requestListener = function (req, res) {
  res.setHeader("Content-Typye", "text/html");
  res.writeHead(200);
  res.end(indexFile);
};

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
  .then((contents) => {
    indexFile = contents;
    server.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
    });
  })
  .catch((err) => {
    console.error(`Could not read index.html file: ${err}`);
    process.exit(1);
  });

// const server = http.createServer(requestListener);

// fs.readFile(__dirname + "/index.html")
//   .then((contents) => {
//     indexFile = contents;
//     server.listen(port, host, () => {
//       console.log(`server is running on http://${host}:${port}`);
//     });
//   })

//   .catch((err) => {
//     console.error(`could not read the index.html file: ${err}`);
//     process.exit(1);
//   });
