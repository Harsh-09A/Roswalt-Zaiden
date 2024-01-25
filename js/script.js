// Owl Carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

// Gallery fancy Box
Fancybox.bind('[data-fancybox="gallery-a"]', {
  // Your custom options
});

// Popup After First Load - 3 Sec
$(window).ready(function () {
  setTimeout(function () {
    $("#popupModal").modal("show");
  }, 3000);
});

// Toggle Content Button
function toggleContent(dotsId, moreTextId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreTextId);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More ...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}
