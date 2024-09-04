// Core Module File System
const fs = require("fs");

// Readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan Nama Anda : ", (nama) => {
  rl.question("Masukkan Nomor HP Anda : ", (noHP) => {
    const contact = { nama, noHP };
    const file = fs.readFileSync("data/contacts.json", "utf8");
    const contacts = JSON.parse(file);

    contacts.push(contact);
    console.log(`Terimakasih ${nama}, sudah menginputkan ${noHP}`);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

    console.log("Terimakasih sudah memasukkan data.");

    rl.close();
  });
});
