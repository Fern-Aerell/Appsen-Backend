const { server, baseUrl, port } = require("./core/server.js");

server.listen(port, () => {
    console.log(`Appsen backend berjalan pada ${baseUrl}:${port}`);
});