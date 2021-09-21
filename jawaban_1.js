// Jawaban Soal 1 ada di bawah ini
class Hewan {
    constructor(nama, warna, beratGram, harga) {
        this.nama = nama;
        this.warna = warna;
        this.beratGram = beratGram;
        this.harga = harga;
        this.kondisiBagus = false;
    }

    cekKondisiBagus(kondisi = false) {
        return this.kondisiBagus = kondisi;
    }
}

// Cara membuat object instance

let hewanKuda = new Hewan("Kuda", "Cokelat", 1000, 1000000);
hewanKuda.cekKondisiBagus(true);
console.log(hewanKuda);
let hewanBurung = new Hewan("Burung", "Putih", 25, 100000);
hewanBurung.cekKondisiBagus();
console.log(hewanBurung);

console.log('ini hewan kuda =>', hewanKuda);
console.log('ini hewan burung =>', hewanBurung);