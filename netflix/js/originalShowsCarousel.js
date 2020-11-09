const originalsList = [
  {
      "img" : "https://image.tmdb.org/t/p/original/38teDX74nsxkv2ysWvNT5EPXQ9E.jpg",
      "alt" : "power"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/kY0ET33EoiJhjaPCzzvywCDqP6b.jpg",
      "alt" : "o poço"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/bawsegq9g2fkMYDH6blHypzM9tn.jpg",
      "alt" : "o mundo sombrio de sabrina"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/ihvG9dCEnVU3gmMUftTkRICNdJf.jpg", 
      "alt" : "star trek discovery"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/38PkhBGRQtmVx2drvPik3F42qHO.jpg",
      "alt" : "a maldição da residência hill"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/i0uajcHH9yogXMfDHpOXexIukG9.jpg",
      "alt" : "peaky blinders"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/e9LAHrfqFG6wMOexCExGhqerugY.jpg",
      "alt" : "o último guardião"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/aNwWtq0yR0FIQ3G17xydS30SKS9.jpg",
      "alt" : "o segredo do templo"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/knfExByNW2jCwtmIuwYYxzPKpkm.jpg",
      "alt" : "the old guard"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/spqWjgLWvWlluIodXFn1SsNtISC.jpg",
      "alt" : "o diabo de cada dia"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/aLniylyJlbXEdxvaGSuQkRACWUx.jpg",
      "alt" : "klaus"
  },
  {
      "img" : "https://image.tmdb.org/t/p/original/rHY0gSURWEgNSjc2ePEIFf4qDOs.jpg",
      "alt" : "expresso do amanhã"
  }
];

const originalsCarousel = document.getElementById("original-shows");

originalsList.map(
  item => {
      // criar link
      const link = document.createElement("a");
      link.classList.add("slick-slide");
      link.href = "#";

      // adicionar thumbnail
      const template = `<img class="carousel-img" src="${item.img}" alt="${item.alt}">`;
      link.innerHTML = template;

      // adicionar ao carrossel
      originalsCarousel.append(link);
  }
)