import { createServer } from "node:http";

const PORT = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
