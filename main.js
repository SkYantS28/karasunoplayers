document.getElementById('logoLink').addEventListener('click', function(event) { 
    event.preventDefault();
    window.location.reload();
  });
  
  function abrirmenu() {
    document.getElementById("menu").style.width = "250px";
  }
  
  function fecharmenu() {
    document.getElementById("menu").style.width = "0";
  }
  
  function abrirjanela() {
    document.getElementById("minhajanela").style.display = "block";
  }
  
  function fecharjanela() {
    document.getElementById("minhajanela").style.display = "none";
  }
  
  var slideIndex = 1;
  mostrarSlides(slideIndex);
  
  function passarslide(n) {
    mostrarSlides(slideIndex += n);
  }
  
  function atualslide(n) {
    mostrarSlides(slideIndex = n);
  }
  
  function mostrarSlides(n) {
    var i;
    var slides = document.getElementsByClassName("meuslide");
    var dots = document.getElementsByClassName("mini");
    var captionText = document.getElementById("legenda");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  
  var acc = document.getElementsByClassName("acordiao");
  var i;
  for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var informacao = this.nextElementSibling;
    if (informacao.style.display === "block") {
        informacao.style.display = "none";
      } else {
        informacao.style.display = "block";
      }
  });
  }