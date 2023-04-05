$(document).ready(function() {
    var slideIndex = 0;
    var slides = $('.slide');
  
    showSlides();
  
    function showSlides() {
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      slideIndex++;
  
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
  
      slides[slideIndex - 1].style.display = "block";
  
      setTimeout(showSlides, 3000);
    }
  });
  