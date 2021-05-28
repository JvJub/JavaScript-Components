window.addEventListener('DOMContentLoaded', function () {
  
  'use strict';

  function simpleSlider() {
    
    // Which slide does the carousel start.
    let slideIndex = 1;

    // NodeElemets:
    const $sliderItems = document.querySelector('.slider-items'),
      $sliderArrowPrev = document.querySelector('.slider-arrow-previous'),
      $sliderArrowNext = document.querySelector('.slider-arrow-next'),
      $sliderDotsWrapper = document.querySelector('.slider-dots-wrapper'),
      $sliderDots = document.querySelector('.slider-dots');
    
    // Show Slides. Where n - technical argument.
    function showSlides(n) {

      // Endless Slider
      if (n > $sliderItems.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = $sliderItems.length;
      }

      $sliderItems.forEach((item, index, massive) => {
        item.style.display = 'none';
      });

      $sliderDots.forEach((item, index, massive) => {
        item.classList.remove('dot-active');
      });

      $sliderItems[slideIndex - 1].style.display = 'block';
      $sliderDots[slideIndex - 1].classList.add('dot-active');
    }
    showSlides(slideIndex);


    // Plus One Slide. Where n - technical argument.
    function plusSlide(n) {
      showSlides(slideIndex += n);
    }

    
    // Current slide. Where n - technical argument.
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    // Previous slide
    $sliderArrowPrev.addEventListener('click', () => {
      plusSlide(-1);
    });

    // Next slide
    $sliderArrowNext.addEventListener('click', () => {
      plusSlide(1);
    });

    // Switching slides. Event delegation is used
    $sliderDotsWrapper.addEventListener('click', (event) => {

      for (let i = 0; i < $sliderDots.length + 1; i++) {
        if (event.target.matches('div.dot') && event.target === $sliderDots[i - 1]) {
          currentSlide(i);
        }
      }
    });

  }

  module.exports = simpleSlider;
});