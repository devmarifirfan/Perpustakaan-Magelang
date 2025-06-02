document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <header class="bg-white mb-12">
        <div class="container mx-auto px-4 py-4 flex flex-col items-center text-center leading-[35px] lg:leading-[65px]">
            <h1 class="text-[25px] lg:text-[50px] font-extrabold text-forest-dark">
                Dinas Kearsipan dan Perpustakaan<br />
                Kabupaten Magetan
            </h1>
            <p class="text-[14px] text-forest-dark my-4">
                Merawat Memori Bangsa - Membangun Peradaban
            </p>

          <hr class="hidden md:block w-full border-t-[1px] border-forest-dark" />

        </div>
        <div class="container mx-auto px-4 mt-2">
        <button id="menu-toggle" class="md:hidden flex justify-start text-forest-dark  focus:outline-none mt-2 font-bold">
              ☰ Menu
            </button>

            <nav id="main-nav" class="hidden md:block mt-4">
                <ul class="flex flex-col md:flex-row md:flex-wrap justify-start md:justify-center gap-4 lg:gap-8 xl:gap-20 text-left text-sm md:text-base">
                    <li><a href="/public/index.html" class="text-forest-dark hover:text-forest-dark hover:font-semibold transition">Beranda</a></li>
                    <li><a href="/pages/profile.html" class="text-forest-dark hover:text-forest-dark hover:font-semibold transition">Profil</a></li>
                    <li><a href="/pages/perpustakaan.html" class="text-forest-dark hover:text-forest-dark hover:font-semibold transition">Perpustakaan</a></li>
                    <li><a href="/pages/kearsipan.html" class="text-forest-dark hover:text-forest-dark hover:font-semibold transition">Kearsipan</a></li>
                    <li><a href="/pages/informasi-publik.html" class="text-forest-dark hover:text-forest-dark hover:font-semibold transition">Informasi Publik</a></li>
                    <li><a href="/pages/berita.html" class="text-forest-dark hover:text-forest-dark hover:font-semibold transition">Berita</a></li>
                    <li><a href="/pages/baca-buku.html" class="text-forest-dark hover:text-forest-dark hover:font-semibold transition">Baca Buku</a></li>
                    <li><a href="https://e-rema.biz.id" target="_blank" class="text-forest-dark hover:text-forest-dark hover:font-semibold transition">Reservasi</a></li>
                </ul>
            </nav>
        </div>
        
    </header>
  `;

  document.getElementById("header").innerHTML = headerHTML;
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  toggle.addEventListener("click", function () {
    nav.classList.toggle("hidden");
  });
});
