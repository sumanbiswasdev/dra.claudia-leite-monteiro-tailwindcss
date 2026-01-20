
// Sidebar Functionality
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sideBar = document.getElementById("sideBar");

  // Show Menu
  menuBtn.addEventListener("click", () => {
    sideBar.classList.remove("translate-x-full");
  });

  // Hide Menu
  closeBtn.addEventListener("click", () => {
    sideBar.classList.add("translate-x-full");
  });



// Slider Functionality
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
