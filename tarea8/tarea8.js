const http = require('http'); // Importa el módulo HTTP que viene incluido en Node

// Definir el puerto en el cual va a correr el servidor
const port = 3000;

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Luis Fernando Hernandez 3190280');
});

// Escuchar el puerto
server.listen(port, () => {
    console.log(`El servidor está en http://localhost:${port}`);
});