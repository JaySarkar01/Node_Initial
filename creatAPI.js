import data from "./data.js";
import http from "http";

const startServer = () => {
    http.createServer((req, resp) => {
        resp.writeHead(201, { "content-type": "application/json" });
        resp.write(JSON.stringify(data));
        resp.end();
    }).listen(3200, () => {
        console.log('Server is running on http://localhost:3200');
    });
};

export default startServer;
