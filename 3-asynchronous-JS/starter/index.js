const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, data) =>{
    console.log(`Breed : ${data}`)
    superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
        if(err) console.log(err);
        console.log(res);

        fs.writeFile(`${__dirname}/response-url.txt`, res.body.message,(err) => {
            console.log("Error");
        });
    });
});

