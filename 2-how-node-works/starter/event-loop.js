const fs = require("fs");
const crypto = require("crypto");

const start  = Date.now()
setTimeout(() => console.log("Timer 1 complete"), 0);
setImmediate(() => console.log("Immediate 1 complete"));

fs.readFile("./test-file.txt", () => {
    // if (err) return console.error(err);
    console.log("IO task complete ");
    console.log("-------------------------");

    setTimeout(() => console.log("Timer 2 complete"), 0);
    setTimeout(() => console.log("Timer 3 complete"), 3000);
    setImmediate(() => console.log("Immediate 1 complete"));

    crypto.pbkdf2('password', 'salt', 100, 1024, 'sha256', () => {
        console.log(Date.now() - start, "Password Encrypted");
    });
    crypto.pbkdf2('password', 'salt', 100, 1024, 'sha256', () => {
        console.log(Date.now() - start, "Password Encrypted");
    });
    crypto.pbkdf2('password', 'salt', 100, 1024, 'sha256', () => {
        console.log(Date.now() - start, "Password Encrypted");
    });
    crypto.pbkdf2('password', 'salt', 100, 1024, 'sha256', () => {
        console.log(Date.now() - start, "Password Encrypted");
    });
    crypto.pbkdf2('password', 'salt', 100, 1024, 'sha256', () => {
        console.log(Date.now() - start, "Password Encrypted");
    });
    crypto.pbkdf2('password', 'salt', 100, 1024, 'sha256', () => {
        console.log(Date.now() - start, "Password Encrypted");
    });
    crypto.pbkdf2('password', 'salt', 100, 1024, 'sha256', () => {
        console.log(Date.now() - start, "Password Encrypted");
    });
    crypto.pbkdf2('password', 'salt', 100, 1024, 'sha256', () => {
        console.log(Date.now() - start, "Password Encrypted");
    });
    crypto.pbkdf2('password', 'salt', 100, 1024, 'sha256', () => {
        console.log(Date.now() - start, "Password Encrypted");
    });
    crypto.pbkdf2('password', 'salt', 100, 1024, 'sha256', () => {
        console.log(Date.now() - start, "Password Encrypted");
    });
    crypto.pbkdf2('password', 'salt', 100, 1024, 'sha256', () => {
        console.log(Date.now() - start, "Password Encrypted");
    });
});

console.log("Hello from the top-level code");