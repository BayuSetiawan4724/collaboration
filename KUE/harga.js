const kueList = [
    {
        nama: "Nastar",
        deskripsi: "Kue isi selai nanas yang lembut dan lezat.",
        gambar: "https://cdn.linkumkm.id/uploads/library/7/5/3/9/6/75396_840x576.jpeg"
    },
    {
        nama: "Putri Salju",
        deskripsi: "Kue kering bertabur gula halus yang lumer di mulut.",
        gambar: "https://smexpo.pertamina.com/data-smexpo/images/products/3309/galleries/2023052413195715020_1715080736.jpg"
    },
    {
        nama: "Lidah Kucing",
        deskripsi: "Lidah Kucing: Tipis, Renyah, Sekali Coba Bikin Ketagihan.",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5xI0uL54kd_r90JL80AeUsKxGwaZhJ8P-vOJBjAoH_bdfMn1_XtO31iLZbopwW2EKdgA&usqp=CAU"
    },
    {
        nama: "Coklat Mede",
        deskripsi: "Coklat Mede: Lezatnya Coklat, Gurihnya Mede, Kombinasi Sempurna!",
        gambar: "https://i.ytimg.com/vi/SdUMTZZWOWU/maxresdefault.jpg"
    },
    {
        nama: "Sagu Keju",
        deskripsi: "Sagu Keju: Renyah di Luar, Lumer di Dalam, Bikin Nagih!",
        gambar: "https://www.frisianflag.com/storage/app/media/uploaded-files/sagu-keju-santan.jpg"
    },
    {
        nama: "Daki Keju",
        deskripsi: "Kriuknya Bikin Happy, Kejunya Bikin Nagih!",
        gambar: "https://img-global.cpcdn.com/recipes/7a6c7c6960fe875e/1200x630cq70/photo.jpg"
    },
    {
        nama: "Kue Kacang",
        deskripsi: "Aroma Kacang, Rasa Sayang - Kue Kacang yang Bikin Ketagihan!",
        gambar: "https://cdn.yummy.co.id/content-images/images/20210509/WwxR4tkJznby8B7vODGht7ch7D750Rse-31363230353730393933d41d8cd98f00b204e9800998ecf8427e.jpg?x-oss-process=image/resize,w_388,h_388,m_fixed,x-oss-process=image/format,webp"
    },
    {
        nama: "Kastengel",
        deskripsi: "Lezatnya Keju, Renyahnya Pas - Kastengel Favorit Keluarga!",
        gambar: "https://asset.kompas.com/crops/Xcdege5Zh-ewH2rgFeC_s0e548M=/0x258:800x791/1200x800/data/photo/2022/04/17/625bae2b74ac6.jpg"
    }
];

const container = document.getElementById("kue-container");
const nomorWA = "6281242994866";  

kueList.forEach(kue => {
    const card = document.createElement("div");
    card.classList.add("card");

    const pesanWA = encodeURIComponent(`Halo, saya ingin memesan kue ${kue.nama}. Apakah masih tersedia?`);
    const waLink = `https://wa.me/${nomorWA}?text=${pesanWA}`;

    card.innerHTML = `
        <img src="${kue.gambar}" alt="${kue.nama}">
        <div class="card-content">
            <h3>${kue.nama}</h3>
            <p>${kue.deskripsi}</p>
            <a href="${waLink}" class="wa-button" target="_blank">Pesan via WhatsApp</a>
        </div>
    `;

    container.appendChild(card);
});
