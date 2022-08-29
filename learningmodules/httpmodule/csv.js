const http = require("http");

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("content-Disposition", "attachment;filename=oceanpals.csv");
  res.writeHead(200);
  res.end(`id,name,email\n1,aashish karki , aashish@gmail.com`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`server is running on http://${host}: ${port}`);
});
