const fs = require('fs')
const http = require('http')
const url = require('url');

// server
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const overview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const product = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');
const card = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8');
const dataObj = JSON.parse(data);

const replaceTemplate = (temp, prod) => {
    let out = temp.replace(/{%NAME%}/g, prod.productName);
    out = out.replace(/{%PRICE%}/g, prod.price);
    out = out.replace(/{%IMAGE%}/g, prod.image);
    out = out.replace(/{%FROM%}/g, prod.from);
    out = out.replace(/{%VITAMIN%}/g, prod.nutrients);
    out = out.replace(/{%QUANTITY%}/g, prod.quantity);
    out = out.replace(/{%DESCRIPTION%}/g, prod.description);
    out = out.replace(/{%ID%}/g, prod.id);

    if(prod.organic == false){
        out = out.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    }
    return out;
}

const server = http.createServer((req, res) => {
    const pathName = req.url;

    switch(pathName) {
        case '/':
            // Render your home page
            res.writeHead(200, {'Content-type': 'text/html'});
            const cardsHtml = dataObj.map(el => replaceTemplate(card, el)).join('');
            console.log(cardsHtml);
            const output = overview.replace(/{%CARDS%}/g, cardsHtml);
            // res.write('<h1>Welcome to Home Page</h1>');
            res.end(output);
            break;
        case '/product':
            // Render your about page
            res.writeHead(200, {'Content-type': 'text/html'});
            // res.write('<h1>Welcome to About Page</h1>');
            res.end(product);
            break;
        case '/api':
            // Render your api page
            res.writeHead(200, {'Content-type': 'application/json'});
            res.write(data);
            res.end();
            break;
        default:
            // Render a 404 page
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('<h1>404 Not Found</h1>');
            res.end();
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening on port 8000");
});