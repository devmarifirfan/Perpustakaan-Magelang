document.addEventListener('DOMContentLoaded', () => {
    const searchSection = document.getElementById('searchSection');

    if (searchSection) {
        searchSection.innerHTML = `
            <div class="relative w-full max-w-lg sm:max-w-xl lg:max-w-4xl mx-auto">
                <input type="text" placeholder="Cari informasi"
                    class="w-full pr-10 pl-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black placeholder:italic" />
                <img src="/public/assets/icon/search.png" alt="Search"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-60" />
            </div>
        `;
    }
});
