let slideIndex = 0;
mostrarSlides(slideIndex);

function mudarSlide(n) {
  mostrarSlides(slideIndex += n);
}

function mostrarSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Iniciar o carrossel automaticamente
function iniciarCarrossel() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(iniciarCarrossel, 3000); // Mudar imagem a cada 3 segundos
}

iniciarCarrossel();

// Funções para abrir e fechar a sidebar
function abrirSidebar() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function fecharSidebar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
// Mostrar o botão de voltar ao topo quando o usuário rolar 20px para baixo
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// Rolagem suave até o topo da página
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
