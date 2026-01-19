const slider = document.getElementById('slider')
const totalSlides = slider.children.length

let currentIndex = 0

function updateSlider(){

    // Move slider left based on the index
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.getElementById("next").onclick = () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to first
    updateSlider();
  };

  document.getElementById("prev").onclick = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to last
    updateSlider();
  };
