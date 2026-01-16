  const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');

    if(menu.classList.contains('hidden')){
        menuBtn.innerHTML = '<i class="fa-solid fa-indent"></i>';

    }
    else{
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
});