
export const runLifeEngine = function(grid, rule){
    var newGrid = []

    for(var i = 0; i < grid.length; i++){
        newGrid[i] = [];
        for(var j = 0; j < grid[i].length; j++){
            newGrid[i][j] = getNewTileValue(j, i, grid, rule);
        }
    }

    return newGrid;
}

var getNewTileValue = function(x, y, grid, rule){
    var value = grid[y][x];
    var count = 0;

    var survivalSet = rule.survival;
    var birthSet = rule.birth;
    
    var ruleTable = rule.weights;

    var weight;
    var neighbor;
    for(var i = 0; i < ruleTable.length; i++){
        for(var j = 0; j < ruleTable[i].length; j++){
            var checkingX = x + j - 1;
            var checkingY = y + i - 1;

            if(checkingX < 0 || checkingX >= grid[i].length){
                continue;
            }
            else if(checkingY < 0 || checkingY >= grid.length){
                continue;
            }

            weight = ruleTable[i][j];
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