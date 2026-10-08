const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kata atau kalimat: ", function(kata) {

    let hasil = "";

    for (let i = 0; i < kata.length; i++) {

        if (kata[i] != " ") {
            hasil += kata[i];
        }

    }

    console.log("Hasil: " + hasil);

    rl.close();
});