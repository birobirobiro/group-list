const column = document.querySelector('#column');
const grid = document.querySelector('#grid');
const group = document.querySelector('.group-list');
const wrapper = document.querySelector('.wrapper');

function showColumn() {
  group.classList.add('active');
  column.classList.add('active');
  grid.classList.remove('active');
  wrapper.classList.add('active');
}

function showGrid() {
  group.classList.remove('active');
  column.classList.remove('active');
  grid.classList.add('active');
  wrapper.classList.remove('active');
}

column.addEventListener('click', showColumn)
grid.addEventListener('click', showGrid)