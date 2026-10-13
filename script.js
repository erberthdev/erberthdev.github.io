// Mantém o ano do rodapé atualizado sem depender de bibliotecas externas.
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
