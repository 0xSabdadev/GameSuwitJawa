function getPilihanComputer() {
    const compt = Math.random();
    // ! JANGAN LUPA penulisan Math.random() HARUS PAKE ()
    if (compt < 0.34) return "gajah";
    if (0.34 < compt <= 0.66) return "orang";
    return "semut";
    //! kenapa diganti RETURN? karena nanti kita akan masukkan itu ke dalam variabel di main functionnya
    //! jadi ngga pake variabel dr fungsi ini inti nya.
}

function getPilihanUser(p, compt) {
    if (p == compt) return "SERII";
    if (p == "gajah") return (compt == "semut") ? "Kalah" : "Menang";
    if (p == "semut") return (compt == "gajah") ? "Menang" : "Kalah";
    if (p == "orang") return (compt == "gajah") ? "Kalah" : "Menang";
}

//* function Putar
function putar() {
    const imgComputer = document.querySelector(".img-komputer");
    const gambar = ["gajah", "orang", "semut"];
    let i = 0;
    const waktuMulai = new Date().getTime(); //? (1.) ketika diklik, ambil waktu saaat ini, untuk digunakan ntar dalam pemberhentian
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval; //? (2.) biar kalo 1 detik /1000ms berhenti
            return; //! JANGAN LUPA, kalo clearinterval di dalam function harus di RETURN agar keluar dr function
        }
        // ! clearInterval ditulis diAWAL
        imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
        if (i == gambar.length) { //! biar ketika sudah selesai di index terakhir, ulang dr awal
            i = 0;
        }
    }, 100); //! 100ms
}

// * SHORTHAND
const pilihan = document.querySelectorAll('li img'); //? ingat, All mengembalikan nodeList / ARRAY jadi, kalo  mau diambil salah satu pake forEach
pilihan.forEach(function (pil) { //? artinya, setiap gambar(pil) dalam pilihan, ingat parameter ke-1 dlm foreach berarti index ke.
    pil.addEventListener("click", function () { //?jika setiap gambar di klik maka...
        const pComputer = getPilihanComputer();
        const pUser = pil.className;
        const hasil = getPilihanUser(pUser, pComputer);

        putar();

        setTimeout(function () { //! timeOut agar setelah putar dijalankan, maka..
            const gambarComp = document.querySelector(".img-komputer");
            gambarComp.setAttribute("src", "img/" + pComputer + ".png");
            const info = document.querySelector(".info");
            info.innerHTML = hasil;
        }, 1000);

    });
});

//*LONGHAND
// ?const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//     const pComputer = getPilihanComputer();
//     const pUser = pGajah.className;
//     const hasil = getPilihanUser(pUser, pComputer);
//     //!maksudnya adalah pUser diisi dengan nama Class dari pGajah, 
//     //! kebetulan nama class nya sama dengan nama p di function getPilihanUSer, jadi make itu
//     const gambarComp = document.querySelector(".img-komputer");
//     gambarComp.setAttribute("src", "img/" + pComputer + ".png");
//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });

// ?const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//     const pComputer = getPilihanComputer();
//     const pUser = pOrang.className;
//     const hasil = getPilihanUser(pUser, pComputer);
//     //!maksudnya adalah pUser diisi dengan nama Class dari pGajah, 
//     //! kebetulan nama class nya sama dengan nama p di function getPilihanUSer, jadi make itu
//     const gambarComp = document.querySelector(".img-komputer");
//     gambarComp.setAttribute("src", "img/" + pComputer + ".png");
//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });

// ?const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//     const pComputer = getPilihanComputer();
//     const pUser = pSemut.className;
//     const hasil = getPilihanUser(pUser, pComputer);
//     //!maksudnya adalah pUser diisi dengan nama Class dari pGajah, 
//     //! kebetulan nama class nya sama dengan nama p di function getPilihanUSer, jadi make itu
//     const gambarComp = document.querySelector(".img-komputer");
//     gambarComp.setAttribute("src", "img/" + pComputer + ".png");
//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });