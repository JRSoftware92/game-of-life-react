
const emptyGrid = (numRows, numColumns) => {
    const grid = [];

    for(let i = 0; i < numRows; i++){
      const row = [];
      for(let j = 0; j < numColumns; j++){
        row.push(0);
      }
      grid.push(row);
    }

    return grid;
}

const randomGrid = (numRows, numColumns, density) => {
    const grid = [];

    for(let i = 0; i < numRows; i++){
      const row = [];
      for(let j = 0; j < numColumns; j++){
        const value = Math.random() * 100 <= density ? 1 : 0;
        row.push(value);
      }
      grid.push(row);
    }

    return grid;
}

const gridUtils = {
    emptyGrid: emptyGrid,
    randomGrid: randomGrid
}

export default gridUtils;