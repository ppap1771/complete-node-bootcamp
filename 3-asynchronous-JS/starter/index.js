const fs = require("fs");
const superagent = require("superagent");

// call back way
// fs.readFile(`${__dirname}/dog.txt`, (err, data) =>{
//     console.log(`Breed : ${data}`)
//     superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//         if(err) console.log(err);
//         console.log(res);

//         fs.writeFile(`${__dirname}/response-url.txt`, res.body.message,(err) => {
//             console.log("Error");
//         });
//     });
// });

//  Promise

const readFliePromise = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject("File not found.");
            resolve(data);
        });
    });
};

const writeFilePromise = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if (err) reject("File not found.");
            resolve("Success");
        });
    });
};
/*
readFliePromise(`${__dirname}/dog.txt`)
    .then((data) => {
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    })
    .then((res) => {
        console.log(`Breed: ${res}`);
        return writeFilePromise(`${__dirname}/response-url.txt`, res.body.message);
    })
    .then(() => {
        console.log("Success");
    })
    .catch((err) => {
        console.log(err.message);
});
*/

// Async Await
const getAPIResponse = async () => {
    try{
        const data = await readFliePromise(`${__dirname}/dog.txt`);
        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(`Breed: ${res}`);
        await writeFilePromise(`${__dirname}/response-url.txt`, res.body.message);
        console.log("Success");
    }
    catch(err){
        console.log(err.message);
    }
    return "2";
}
(async () => {
    try{
        console.log("1")
        const x = await getAPIResponse();
        console.log(x);
        console.log("3")
    }
    catch{
        console.log("Error");
    }
})();
