// Helpers
const render = (parent, children) => {
  parent.append(...children);
}

const gridContainer = document.querySelector('.js-grid-container');

const createCell = () => {
  const cell = document.createElement('div');
  cell.classList.add('grid-cell');
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