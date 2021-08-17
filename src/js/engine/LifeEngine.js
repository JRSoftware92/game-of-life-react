
const getNewTileValue = (x, y, grid, rule) => {
    const value = grid[y][x];

    const survivalSet = rule.survival;
    const birthSet = rule.birth;

    const ruleTable = rule.weights;

    let weight;
    let neighbor;
    let count = 0;

    ruleTable.forEach((ruleRow, i) => {
        const checkingY = y + i - 1;

        if (checkingY > -1 && checkingY < grid.length){
            ruleRow.forEach((ruleTile, j) => {
                const checkingX = x + j - 1;

                if(checkingX > -1 && checkingX < grid[i].length){
                    weight = ruleTable[i][j];
                    neighbor = grid[checkingY][checkingX];

                    if(neighbor){
                        count += weight;
                    }
                }
            });
        }
    });

    if(birthSet.indexOf(count) > -1){
        return 1;
    }
    else if(survivalSet.indexOf(count) > -1){
        return value;
    }
    else{
        return 0;
    }
};

export const runLifeEngine = (grid, rule) => grid.map((gridRow, i) => gridRow.map((gridTile, j) => getNewTileValue(j, i, grid, rule)));

const LifeEngine = {
    run: runLifeEngine
}

export default LifeEngine;