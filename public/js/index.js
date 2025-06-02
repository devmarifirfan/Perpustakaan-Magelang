document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("#carousel img");
  const dots = document.querySelectorAll("#dots span");
  const carousel = document.getElementById("carousel");
  let current = 0;
  let interval;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.style.opacity = i === index ? "1" : "0";
      img.style.zIndex = i === index ? "1" : "0";
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-opacity-100", i === index);
      dot.classList.toggle("bg-opacity-50", i !== index);
    });
  }

  function nextSlide() {
    current = (current + 1) % images.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    showSlide(current);
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, 3000);
  }

  function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
  }

  // Klik dot
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      current = parseInt(dot.dataset.index);
      showSlide(current);
      resetAutoSlide();
    });
  });

  // Swipe gesture
  let startX = 0;

  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swipe kiri
        nextSlide();
      } else {
        // Swipe kanan
        prevSlide();
      }
      resetAutoSlide();
    }
  });

  // Inisialisasi
  showSlide(current);
  startAutoSlide();
});

// Card Generator
const cardData = [
  {
    title: "SELEKSI TAHAP 2 DUTA BACA KAB. MAGETAN 2025",
    desc: "Dalam upaya mewujudkan Magetan sebagai Kabupaten Literasi, di awal tahun ini Dinas Kearsipan dan Perpustakaan Kab. Magetan kembali mengadakan pemilihan Duta Baca tingkat SLTA Tahun",
    img: "public/assets/img/picture/index-1.png",
    link: "#",
  },
  {
    title: "Raisya Niil Nabila siswi SMAN 1 Magetan Sabet Duta Baca 2025",
    desc: "Berbekal esai bertajuk Semburat Cahaya di Sela Aksara, dengan penuh percaya diri pada saat menyampaikan orasi literasinya. Raisya Niil",
    img: "public/assets/img/picture/index-2.png",
    link: "#",
  },
  {
    title: "Bimtek Read Aloud, Perkuat Literasi Anak",
    desc: "Bertempat di Graha Pusat Literasi Kab. Magetan, Dinas Arpus Kab. Magetan mengadakan Bimbingan Teknis membaca nyaring (Read Aloud) bagi para Guru mulai jenjang PAUD, TK",
    img: "public/assets/img/picture/index-3.png",
    link: "#",
  },
  {
    title: "Pengumuman Finalis Duta Baca Tahun 2025",
    desc: "Setelah melalui berbagai tahapan, mulai dari seleksi naskah esai tentang visi, misi, dan program kerja sampai dengan tes tulis, berikut hasil 10 Besar Besar Duta ...",
    img: "public/assets/img/picture/index-4.png",
    link: "#",
  },
];

const container = document.getElementById("cardContainer");

cardData.forEach((card) => {
  container.innerHTML += `
    <div class="bg-[#EEF2F0] overflow-hidden">
        <div class="flex flex-col md:flex-row items-start p-6 gap-6">
            <img src="${card.img}" alt="${card.title}" class=" md:w-[240px] md:h-[177px] object-cover">
            <div class="flex flex-col justify-between h-full w-full">
                <h3 class="text-[20px] font-bold text-forest-dark mb-2">${card.title}</h3>
                <p class="text-forest-dark text-[13px] leading-[25px] mb-4">${card.desc}</p>
                <a
            href="${card.link}"
            class="text-forest-dark text-[12px] font-bold hover:underline inline-flex items-center gap-[1px]"
          >
            Baca selengkapnya
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 h-3 mt-[2px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
            </div>
        </div>
    </div>
    `;
});

