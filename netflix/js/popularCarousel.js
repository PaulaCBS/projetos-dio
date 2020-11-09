const popularList = [
    {
        "img" : "https://image.tmdb.org/t/p/original/p3FCnFi4QSxeZcqynzcQzx14mOs.jpg",
        "alt" : "riverdale"
    },
    {
        "img" : "https://image.tmdb.org/t/p/original/baz06JeHeGjq45auOFEiw1K7zVj.jpg",
        "alt" : "modern family"
    },
    {
        "img" : "https://image.tmdb.org/t/p/original/qNz3DNoig1m2EiDMJ3YAdFVZW7Q.jpg",
        "alt" : "o alienista"
    },
    {
        "img" : "https://image.tmdb.org/t/p/original/edmk8xjGBsYVIf4QtLY9WMaMcXZ.jpg",
        "alt" : "grey's anatomy"
    },
    {
        "img" : "https://image.tmdb.org/t/p/original/l0qVZIpXtIo7km9u5Yqh0nKPOr5.jpg",
        "alt" : "friends"
    },
    {
        "img" : "https://image.tmdb.org/t/p/original/hncfkmhyp22ULtMED1O0ODfqquq.jpg",
        "alt" : "teen wolf"
    },
    {
        "img" : "https://image.tmdb.org/t/p/original/rTGf0tSE07oRa7soOssCFYtQYDO.jpg",
        "alt" : "caçadoras de recompensas"
    },
    {
        "img" : "https://image.tmdb.org/t/p/original/6tWJaE0XEEkB7lpxDE7F3Mmhtt6.jpg",
        "alt" : "naruto"
    },
    {
        "img" : "https://image.tmdb.org/t/p/original/eFVdb2W8Ok5iqWHz1i4fGfUi1Em.jpg",
        "alt" : "a pior das bruxas"
    },
    {
        "img" : "https://image.tmdb.org/t/p/original/yA2WBBIcKSsmOyYzlbE9y4r9wua.jpg",
        "alt" : "you"
    },
    {
        "img" : "https://image.tmdb.org/t/p/original/faN1IRB3QTInzayMIuXrDjXet4A.jpg",
        "alt" : "luna nera"
    },
    {
        "img" : "https://image.tmdb.org/t/p/original/huHjjtpOJ7voQ9j2Jr4MCuQ7bY.jpg",
        "alt" : "the good place"
    },
];

const getCarousel = document.getElementById("popular-shows");

popularList.map(
    item => {
        // criar link
        const link = document.createElement("a");
        link.classList.add("slick-slide");
        link.href = "#";

        // adicionar thumbnail
        const template = `<img class="carousel-img" src="${item.img}" alt="${item.alt}">`;
        link.innerHTML = template;

        // adicionar ao carrossel
        getCarousel.append(link);
    }
)