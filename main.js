// ink color variables and functions
let inkColor = '#000';
const getInkColor = () => inkColor;
const setInkColor = (value) => inkColor = value;

const gridContainer = document.querySelector('.js-grid-container');

// Helpers
const render = (parent, children) => {
  parent.append(...children);
}

// tracking mouse up and down
// sketch happen when the mouse is down and the cursor hovered the cells
let isPointerDown = false;
window.addEventListener('pointerdown', (e) => {
  isPointerDown = true;
})
window.addEventListener('pointerup', (e) => {
  isPointerDown = false;
})

// Toolbar

// Ink Color Tool
const inkColorTool = document.querySelector('.ink-color-tool')
inkColorTool.addEventListener('change', (e) => {
  console.log(e.target.value)
  setInkColor(e.target.value);
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
  cell.addEventListener('pointerdown', (e) => {
    e.target.style.backgroundColor = getInkColor();
  })
  cell.addEventListener('pointerover', (e) => {
    if (isPointerDown) e.target.style.backgroundColor = getInkColor();
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