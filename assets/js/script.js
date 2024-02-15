var nome = document.querySelector('#name');
var texto = nome.innerHTML;

nome.addEventListener('mouseenter', () => {
    nome.innerHTML = '@lucazf4';
    nome.setAttribute('href', 'https://instagram.com/lucazf4');
})
nome.addEventListener('mouseleave', () => {
    nome.innerHTML = 'Lucas Maciel';
    nome.setAttribute('href', '#');

})