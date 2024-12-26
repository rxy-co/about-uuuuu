const lyrics = [
    "You and I (don't let go) were alive (don't let go)",
    "With nothing to do, I could lay and just look in your eyes",
    "Wait (don't let go) and pretend (don't let go)",
    "Hold on and hope that we'll find our way back in the end",
    "Do you think I have forgotten?",
    "Do you think I have forgotten?",
    "Do you think I have forgotten,",
    "About you?"
];

// Array timing: berisi jeda waktu untuk tiap baris lirik
const timing = [11000, 10000, 10000, 10000, 5000, 5000, 5000, 2500]; 

let currentLine = 0;

function displayNextLine() {
    const displayArea = document.getElementById("lyricsDisplay");

    // Tampilkan baris saat ini
    if (currentLine < lyrics.length) {
        let line = lyrics[currentLine];
        
        // Buat elemen paragraf baru untuk setiap lirik
        const p = document.createElement("p");

        // Jika ini adalah baris terakhir yang ingin ditonjolkan
        if (line === "About you?") {
            p.classList.add("strong-line");
        }
        
        p.classList.add("fade-in"); // Tambahkan kelas fade-in
        p.textContent = line;
        
        // Tambahkan lirik baru tanpa menghapus yang sebelumnya
        displayArea.appendChild(p);

        // Atur jeda tampilan untuk baris berikutnya, lalu panggil fungsi lagi
        setTimeout(() => {
            currentLine++;
            displayNextLine();
        }, timing[currentLine]); // Ambil jeda sesuai indeks timing
    }
}

function startLyrics() {
    const displayArea = document.getElementById("lyricsDisplay");
    displayArea.innerHTML = ""; // Reset tampilan
    currentLine = 0; // Reset index lirik
    displayNextLine(); // Mulai menampilkan lirik
}

// Memulai lirik saat halaman dimuat
window.onload = startLyrics;


// Fungsi untuk menampilkan animasi "love"
function showRandomLove() {
    const loveContainer = document.getElementById("loveContainer");
    const loveElement = document.createElement("div");
    loveElement.textContent = "❤️"; // Animasi berupa simbol love
    loveElement.className = "love"; // Tambahkan kelas animasi

    // Posisi acak
    const randomX = Math.random() * 90 + "%"; // Acak dari 0% hingga 90% (horizontal)
    const randomY = Math.random() * 90 + "%"; // Acak dari 0% hingga 90% (vertikal)
    loveElement.style.left = randomX;
    loveElement.style.top = randomY;

    loveContainer.appendChild(loveElement);

    // Hapus elemen setelah animasi selesai
    setTimeout(() => {
        loveElement.classList.add("fade-out");
        setTimeout(() => {
            loveContainer.removeChild(loveElement);
        }, 1000); // Sinkron dengan durasi animasi fade-out
    }, 2000); // Tampilkan selama 2 detik sebelum menghilang
}

// Modifikasi pada fungsi displayNextLine
function displayNextLine() {
    const displayArea = document.getElementById("lyricsDisplay");

    if (currentLine < lyrics.length) {
        let line = lyrics[currentLine];
        const p = document.createElement("p");

        if (line === "About you?") {
            p.classList.add("strong-line");
        }

        p.classList.add("fade-in");
        p.textContent = line;
        displayArea.appendChild(p);

        setTimeout(() => {
            currentLine++;
            displayNextLine();
        }, timing[currentLine]);
    } else {
        // Ketika lirik selesai, jalankan animasi "love"
        for (let i = 0; i < 10; i++) { // Tampilkan 10 animasi "love"
            setTimeout(showRandomLove, i * 300); // Tunda setiap love untuk efek bertahap
        }
    }
}

