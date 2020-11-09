const risingList = [
  {
      "img" : "https://image.tmdb.org/t/p/original/mAXOCbZzvmDa6PCh5dcIPOB51Qc.jpg"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/eIuUgn7ZUMCE2pQU4Omg9SuGYWT.jpg"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/mE3zzMkpP8yqlkzdjPsQmJHceoe.jpg"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/yDra4fvpFH6JubOm6yqBAnGA2QS.jpg"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/tNlkKrypFs6QSUjFVQntFISoFv5.jpg"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/kRsDSZj7mNN9dpNqsUjjFvyxtW3.jpg"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/jB60cex93zpmFcG5Oo5k9YKXcFw.jpg"
  }
];

const risingShowsCarousel = document.getElementById("rising-shows");

risingList.map(
  item => {
      // criar link
      const link = document.createElement("a");
      link.classList.add("slick-slide");
      link.href = "#";

      // adicionar thumbnail
      const template = `<img class="carousel-img" src="${item.img}" alt="thumbnail">`;
      link.innerHTML = template;

      // adicionar ao carrossel
      risingShowsCarousel.append(link);
  }
)