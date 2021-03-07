const http = require('http');

const host = 'localhost';
const port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'Acessando'});
    res.end("Finalizado...");
}).listen(port, host,()=>{
    console.log("Servidor acessando na em: Localhost");
});