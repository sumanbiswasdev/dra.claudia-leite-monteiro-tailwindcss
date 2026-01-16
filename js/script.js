// Select the elements
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sideBar = document.getElementById('sideBar');

// Function to open the menu
menuBtn.addEventListener('click', () => {
  sideBar.classList.remove('translate-x-full'); // Slides it in

});

// Function to close the menu
closeBtn.addEventListener('click', () => {
  sideBar.classList.add('translate-x-full'); // Slides it out
});
