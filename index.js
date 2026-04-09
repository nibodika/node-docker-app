const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <h1>Hello from Dockerized Node.js App</h1>

        <p>This is my containerized Node app!</p>
    `);
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
