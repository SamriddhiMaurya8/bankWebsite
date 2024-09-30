
  const items = document.querySelectorAll('.ripple-item');
  const leftButton = document.querySelector('.control-left');
  const rightButton = document.querySelector('.control-right');
  let currentIndex = 0;

  // Function to update the displayed items
  function updateCarousel() {
    items.forEach((item, index) => {
      if (index < currentIndex || index >= currentIndex + 4) {
        item.classList.add('hidden'); // Hide items not in the current view
      } else {
        item.classList.remove('hidden'); // Show current items
      }
    });

    // Disable buttons if at the beginning or end
    leftButton.disabled = currentIndex === 0;
    rightButton.disabled = currentIndex + 4 >= items.length;
  }

  // Event listeners for navigation buttons
  leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateCarousel();
    }
  });

  rightButton.addEventListener('click', () => {
    if (currentIndex + 4 < items.length) {
      currentIndex += 1;
      updateCarousel();
    }
  });

  // Initial display
  updateCarousel();

