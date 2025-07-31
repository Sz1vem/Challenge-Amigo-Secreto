// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (!nombre) {
    alert('Por favor, escribe un nombre válido.');
    return;
  }

  if (listaAmigos.includes(nombre)) {
    alert('Ese nombre ya fue agregado.');
    return;
  }

  listaAmigos.push(nombre);
  input.value = '';
  mostrarLista();
}

function mostrarLista() {
  const ul = document.getElementById('listaAmigos');
  ul.innerHTML = '';

  listaAmigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    ul.appendChild(li);
  });
}

function sortearAmigo() {
  const resultadoUl = document.getElementById('resultado');
  resultadoUl.innerHTML = '';

  if (listaAmigos.length < 2) {
    alert('Agrega al menos 2 amigos para realizar el sorteo.');
    return;
  }

  let asignados = [...listaAmigos];
  let valido = false;
  let intentos = 0;

  while (!valido && intentos < 1000) {
    intentos++;
    asignados = asignados.sort(() => Math.random() - 0.5);
    valido = listaAmigos.every((nombre, i) => nombre !== asignados[i]);
  }

  if (!valido) {
    alert("No se pudo realizar un sorteo válido. Intenta de nuevo.");
    return;
  }

  // Mostrar el resultado en la lista
  listaAmigos.forEach((nombre, i) => {
    const li = document.createElement('li');
    li.textContent = `${nombre} → ${asignados[i]}`;
    resultadoUl.appendChild(li);
  });
}
