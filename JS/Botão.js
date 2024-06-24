window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}


function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
