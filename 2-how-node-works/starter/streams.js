const fs = require("fs");
const server = require("http").createServer();

server.on('request', (req, res) => {
    // 1
    // fs.readFile('./test-file.txt', (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // });

    // 2
    // const readable = fs.createReadStream('./test-file.txt');
    // readable.on('data', chunk => {
    //     res.write(chunk);
    // });
    // readable.on('end', () => {
    //     res.end();
    // })

    // 3
    const readable = fs.createReadStream('./test-file.txt');
    // readable source ===== > writeable dest
    // pipe solves back pressure issue
    readable.pipe(res);
});

server.listen(8000, '127.0.0.1',() => {
    console.log("listening on port 8000");
});