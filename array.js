
let siswa = [
    ["Andi", 80],
    ["Budi", 65],
    ["Caca", 90],
    ["Doni", 75]
];

// nilai rata-rata
let total = 0;

for (let i = 0; i < siswa.length; i++) {
    total += siswa[i][1];
}

let rata = total / siswa.length;

console.log("Nilai rata-rata: " + rata);

// siswa yang lulus
console.log("Yang lulus:");

for (let i = 0; i < siswa.length; i++) {
    if (siswa[i][1] > 70) {
        console.log(siswa[i][0]);
    }
}

// nilai terbesar
let terbesar = siswa[0];

for (let i = 1; i < siswa.length; i++) {
    if (siswa[i][1] > terbesar[1]) {
        terbesar = siswa[i];
    }
}

console.log("Nilai terbesar: " + terbesar[0] + " = " + terbesar[1]);
