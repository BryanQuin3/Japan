// Obtenemos el ícono del menú y las opciones del menú
const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelectorAll('.dropdown_menu');

// Agregamos un evento de clic al ícono del menú
menuIcon.addEventListener('click', () => {
    // Alternamos la clase 'show-menu' en los elementos de las opciones del menú
    menuItems.forEach(item => {
        item.classList.toggle('show-menu');
    });
});

const input = document.querySelector('#input');
const search = document.querySelector('#submit');
search.addEventListener('click',()=>{
    input.value='';
})