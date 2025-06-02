// components/books.js
const books = [
    {
        title: "Antuk Amanah Bupati Magetan",
        description: "Buku yang ditulis oleh Bupati Magetan periode 2018-2023. Menceritakan kisah dinamika pergulatan dan perjalanan Penulis hingga menjadi Bupati Magetan.",
        image: "../assets/img/picture/Buku-1.png",
    },
    {
        title: "Junior Writerpreneur#1 Inklusi Sosial",
        description: "Buku hasil kompetisi Penulis muda tingkat Kabupaten Magetan jenjang pendidikan SD, SMP, dan SMA/K sederajat, yang dikemas dalam kegiatan Junior...",
        image: "../assets/img/picture/Buku-2.png",
    },
    {
        title: "Junior Writerpreneur#2 Melejitkan Karya",
        description: "Buku hasil kompetisi Penulis muda tingkat Kabupaten Magetan jenjang pendidikan SD, SMP, SMA/K sederajat dalamm kegiatan Junior Writerpreneur #2 tahun...",
        image: "../assets/img/picture/Buku-3.png",
    },
    {
        title: "Junior Writerpreneur#3: Kisah Anak",
        description: "Buku hasil kompetisi Penulis muda tingkat Kabupaten Magetan jenjang pendidikan SD, SMP, dan SMA/K dalam kegiatan Junior Writerpreneur #3 tahun...",
        image: "../assets/img/picture/Buku-4.png",
    },
    {
        title: "Junior Writerpreneur#4: Cerita Dari",
        description: "Buku ini merupakan kompilasi tulisan 20 terbaik dari masing-masing jenjang dari SD, SMP, SMA/K sederajat dalam kompetisi Junior Writerpreneur Tahun...",
        image: "../assets/img/picture/Buku-5.png",
    },
    {
        title: "Menyemai Tradisi di Bumi...",
        description: "Buku hasil kegiatan Inkubator Literasi Pustaka Nusantara (ILPN) tahun 2023 Lokus Magetan.",
        image: "../assets/img/picture/Buku-6.png",
    },
];

const bookSection = document.getElementById("bookSection");

books.forEach(book => {
    const card = document.createElement("div");
    card.className = "w-[300px] space-y-3 bg-[#EEF2F0] p-8";

    card.innerHTML = `
    <div class="flex justify-center">
    <img src="${book.image}" alt="${book.title}" class="w-[211px] h-[300px] object-cover shadow-md" />
    </div>
    <h3 class="text-xl font-semibold text-forest-dark">${book.title}</h3>
    <p class="text-gray-600 text-sm text-justify">${book.description}</p>
    `;

    bookSection.appendChild(card);
});
