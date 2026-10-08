
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan jumlah barang: ", function(jumlahbarang) {
    rl.question("Pilih barang (1-5): ", function(barang) {

        let harga = 0;

        switch (parseInt(barang)) {
            case 1:
                harga = 2000000;
                break;

            case 2:
                harga = 50000;
                break;

            case 3:
                harga = 12000000;
                break;

            case 4:
                harga = 8500000;
                break;

            case 5:
                harga = 78000;
                break;
        }

        let total = harga * parseInt(jumlahbarang);
        let diskon = 0;

        if (total >= 300000) {
            diskon = total * 0.10;
        }
        else if (total >= 100000) {
            diskon = total * 0.05;
        }
        else if (total >= 50000) {
            diskon = total * 0.03;
        }

        let totalbayar = total - diskon;

        console.log("Total belanja Rp" + total);

        if (diskon > 0) {
            console.log("Diskon Rp" + diskon);
            console.log("Total bayar Rp" + totalbayar);
        }
        else {
            console.log("Anda tidak dapat diskon karena tidak memenuhi syarat");
        }

        rl.close();
    });
});

