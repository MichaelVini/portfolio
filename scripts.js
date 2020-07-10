const elemento = document.querySelector('p');

function typeWriter(element) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 80 * i);
    });
  }
typeWriter(elemento);