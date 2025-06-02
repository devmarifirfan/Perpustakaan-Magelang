document.addEventListener("DOMContentLoaded", function () {
    const archiveItemsContainer = document.getElementById("archiveItems");

    const items = [
        { title: "Dokumen Arsip Kegiatan 2024", downloadLink: "#" },
        { title: "Data Pengelolaan Arsip Digital", downloadLink: "#" },
        { title: "Laporan Evaluasi Kearsipan Tahunan", downloadLink: "#" },
        { title: "Panduan Pengelolaan Arsip Sekolah", downloadLink: "#" },
        { title: "Inventaris Arsip Fisik dan Elektronik", downloadLink: "#" },
        { title: "Dokumentasi Pelayanan Informasi Publik", downloadLink: "#" }
    ];

    items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "flex justify-between items-start bg-[#EEF2F0] p-4 shadow-sm";

        itemDiv.innerHTML = `
            <div class="max-w-[80%]">
                <h2 class="text-lg font-semibold text-forest-dark mb-2">${item.title}</h2>
            </div>
            <div class="mt-1">
                <a href="${item.downloadLink}" class="text-sm bg-forest-dark text-white px-4 py-2 rounded-[48px] hover:bg-forest text-nowrap">
                    Unduh
                </a>
            </div>
        `;

        archiveItemsContainer.appendChild(itemDiv);
    });
});
