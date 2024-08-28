document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.burger-menu');

    burger.addEventListener('click', function(event) {
        burger.classList.toggle('active');  // Добавление или удаление класса active у бургера
        burgerMenu.classList.toggle('active'); // Добавление или удаление класса active у бургер-меню
        document.body.classList.toggle('lock');
    });
});