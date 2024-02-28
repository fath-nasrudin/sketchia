const INK = '#000';

const gridContainer = document.querySelector('.js-grid-container');

// Helpers
const render = (parent, children) => {
  parent.append(...children);
}

// tracking mouse up and down
// sketch happen when the mouse is down and the cursor hovered the cells
let isMouseDown = false;
window.addEventListener('mousedown', (e) => {
  isMouseDown = true;
})
window.addEventListener('mouseup', (e) => {
  isMouseDown = false;
})

const createCell = () => {
  const cell = document.createElement('div');
  cell.classList.add('grid-cell');

  // listeners to prevent drag event
  cell.addEventListener('dragstart', (e) => {
    e.preventDefault()
  })
  cell.addEventListener('drop', (e) => {
    e.preventDefault()
  })

  // listeners for inking
  cell.addEventListener('click', (e) => {
    e.target.style.backgroundColor = INK;
  })
  cell.addEventListener('mouseover', (e) => {
    if (isMouseDown) e.target.style.backgroundColor = INK;
  })

  return cell;
}

const generateBoard = (square = 16) => {
  let rows = [];
  for (let i = 0; i < square; i++) {

    const div = document.createElement('div');
    div.classList.add('grid-row');

    for (let j = 0; j < square; j++) {
      const cell = createCell();
      div.append(cell);
    }

    rows.push(div);
  }
  return rows;
}

const cells = generateBoard();
render(gridContainer, cells);