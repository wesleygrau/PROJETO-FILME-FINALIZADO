// Seleciona todos os botões de curtir
const curtirBtns = document.querySelectorAll('.curtir-btn');

curtirBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Seleciona o span ao lado do botão
    const contador = btn.nextElementSibling;
    // Incrementa o número de curtidas
    contador.textContent = parseInt(contador.textContent) + 1;
    // Adiciona efeito visual
    btn.style.background = '#00cc44';
  });
});
