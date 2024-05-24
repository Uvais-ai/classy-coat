document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider-wrapper .inner article');
    const numSlides = slides.length;

    // Set the CSS variable for the number of slides
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.style.setProperty('--num-slides', numSlides);

    // Create radio buttons
    const wrapper = document.querySelector('.wrapper');
    for (let i = 1; i <= numSlides; i++) {
      const radioInput = document.createElement('input');
      radioInput.type = 'radio';
      radioInput.name = 'slider';
      radioInput.id = `slide${i}`;
      if (i === 1) radioInput.checked = true;
      wrapper.insertBefore(radioInput, sliderWrapper);
    }

    // Create prev/next controls
    const prevNextControl = document.querySelector('.slider-prev-next-control');
    for (let i = 1; i <= numSlides; i++) {
      const label = document.createElement('label');
      label.setAttribute('for', `slide${i}`);
      prevNextControl.appendChild(label);
    }

    // Create dot controls
    const dotControl = document.querySelector('.slider-dot-control');
    for (let i = 1; i <= numSlides; i++) {
      const label = document.createElement('label');
      label.setAttribute('for', `slide${i}`);
      dotControl.appendChild(label);
    }
  });