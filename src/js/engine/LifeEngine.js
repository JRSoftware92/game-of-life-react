
export const runLifeEngine = function(grid, rules){
    var newGrid = []

    for(var i = 0; i < grid.length; i++){
        newGrid[i] = [];
        for(var j = 0; j < grid[i].length; j++){
            newGrid[i][j] = getNewTileValue(j, i, grid, rules);
        }
    }

    return newGrid;
}

var getNewTileValue = function(x, y, grid, rules){
    var value = grid[y][x];
    var count = 0;

    var survivalSet = rules.survival;
    var birthSet = rules.birth;
    
    var rulesTable = rules.weights;

    var weight;
    var neighbor;
    for(var i = 0; i < rulesTable.length; i++){
        for(var j = 0; j < rulesTable[i].length; j++){
            var checkingX = x + j - 1;
            var checkingY = y + i - 1;

            if(checkingX < 0 || checkingX >= grid[i].length){
                continue;
            }
            else if(checkingY < 0 || checkingY >= grid.length){
                continue;
            }

            weight = rulesTable[i][j];
            neighbor = grid[checkingY][checkingX];

            if(neighbor){
                count += weight;
            }
        }
    }

    if(birthSet.indexOf(count) > -1){
        return 1;
    }
    else if(survivalSet.indexOf(count) > -1){
        return value;
    }
    else{
        return 0;
    }
}

const LifeEngine = {
    run: runLifeEngine
}

export default LifeEngine;