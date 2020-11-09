const newShowsList = [
  {
      "img" : "https://image.tmdb.org/t/p/original/2QSZ4CPd8AoljAL76qM30dFft07.jpg",
      "alt" : "resgate"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/jy0yuQKPFBFa2Z78BT6yjwNSP7Q.jpg",
      "alt" : "white lines"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/mYPVj1BY9tCrtOsjw5arQOfZQrd.jpg",
      "alt" : "noite adentro"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/v0vTo9Na2TXF5k6pSfsxI8nKQIo.jpg",
      "alt" : "os irmãos willoughby"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/a51slt8xs4smZJNys29AfHDCy2R.jpg",
      "alt" : "eu nunca"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/t6lVnN6fsCwxbE4TYkBHOtTWBO1.jpg",
      "alt" : "sangue e água"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/4Q9Ifxv58LePmYLfjWSVyzaf8p9.jpg",
      "alt" : "Unbreakable Kimmy Schmidt: Kimmy x Reverendo"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/dwcazDHJQmC1euuc7oVvDHMRuCv.jpg",
      "alt" : "um crime para dois"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/pvbZQTwaAHXARHjN9ZckcmHwP4F.jpg",
      "alt" : "control z"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/aGuX4z8FPiC9oObQWXRai7TTtej.jpg",
      "alt" : "space force"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/i44x9ChDGKM1leIY78j4rMS2rcn.jpg",
      "alt" : "curon"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/deTb672Jh4HGh48x4MVwHXIytQU.jpg",
      "alt" : "você nem imagina"
  },
];

const newShowsCarousel = document.getElementById("new-shows");

newShowsList.map(
  item => {
      // criar link
      const link = document.createElement("a");
      link.classList.add("slick-slide");
      link.href = "#";

      // adicionar thumbnail
      const template = `<img class="carousel-img" src="${item.img}" alt="thumbnail">`;
      link.innerHTML = template;

      // adicionar ao carrossel
      newShowsCarousel.append(link);
  }
)