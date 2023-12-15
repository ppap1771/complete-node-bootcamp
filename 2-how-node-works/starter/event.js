const event = require("events");
const http = require("http");
class Sales extends event{
    constructor(){
        super();
    }
};
const emitter = new Sales();
emitter.on('newSale', () =>{
    console.log("There was a new sale.");
});

emitter.on('newSale', ()=>{
    console.log("Customer name: Ayush");
});

emitter.emit('newSale');

//////////////////////////////////////////////////////////////////////
const server = http.createServer();
server.on('request', (req, res) => {
    console.log("Event listened ");
    res.end("Req recieved");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Witing for requests ....")
});
