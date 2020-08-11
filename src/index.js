// const list = document.getElementById('players');
// list.insertAdjacentHTML('beforeend', "<li>Obi Wan</li>");


// peguei todos os elementos
const images = document.querySelectorAll('img');

// para cada elemento
images.forEach((img) => {
  // quando user clica no elemento
  // el.addEventListener('eventType', () => { o que fazer quando o evento acontecer })
  img.addEventListener('click', (event) => {
    // deixa elemento redondo
    event.currentTarget.classList.toggle('rounded');
  })
})
