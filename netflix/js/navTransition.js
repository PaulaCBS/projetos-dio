function scrollHandle() {
  const getNav = document.getElementById("nav");

  // detecta a posição da barra de scroll verticalmente
  let scrollY = window.scrollY;
  
	window.addEventListener('scroll', changeColor);
  
	function changeColor() {
     // topo da página
		if (window.scrollY === 0){
      getNav.classList.remove("navbar-on-scroll");
		} 
    // scroll para baixo
		if(window.scrollY > scrollY) {
      getNav.classList.add("navbar-on-scroll");
		} /*else if (window.scrollY < scrollY){
			console.log('scrolling up');
    }*/
       
    scrollY = window.scrollY;
	}
}
scrollHandle();