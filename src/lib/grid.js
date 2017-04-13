export function makeGrid(size, isBlank=false){
    let grid = [];
    for (var i=0; i<size; i++){
        var row = [];
        for(var j=0; j<size; j++){
            var value = (!isBlank) ? Math.random() > 0.8 : false;
            row.push(value);
        }
        grid.push(row);
    }
    return grid;
}

export function updateGridByToggleCell(grid,cell){
    grid[cell.y][cell.x] = !grid[cell.y][cell.x];
    return grid;
}

function countNeighbors(grid,cell){
    let neighbors = 0;
    
    const topRow = (cell.y-1 < 0) ? grid.length-1 : cell.y-1;
    const bottomRow = (cell.y+1 >= grid.length) ? 0 : cell.y+1;
    const leftCol = (cell.x-1 < 0) ? grid.length-1 : cell.x-1;
    const rightCol = (cell.x+1 >= grid.length) ? 0 : cell.x+1;
    
    if (grid[topRow][leftCol]) neighbors++;
    if (grid[topRow][cell.x]) neighbors++;
    if (grid[topRow][rightCol]) neighbors++;
    if (grid[cell.y][leftCol]) neighbors++;
    if (grid[cell.y][rightCol]) neighbors++;
    if (grid[bottomRow][leftCol]) neighbors++;
    if (grid[bottomRow][cell.x]) neighbors++;
    if (grid[bottomRow][rightCol]) neighbors++;

    return neighbors;
}

// Less than 2 or greater than 3 neighbors, die. 
// 2 or 3 neighbors, remain alive. 
// Exactly 3 neighbors, become alive.
function shouldLive(grid, cell) {
    if(grid[cell.y][cell.x])
        return !(countNeighbors(grid,cell) < 2 || countNeighbors(grid,cell) > 3)
    else
        return (countNeighbors(grid,cell) === 3)
}

export function nextGrid(grid){
    let nextGrid = [];
    for(var y=0; y<grid.length; y++){
        let row = [];
        for(var x=0; x<grid.length; x++){
            let cell = {'x':x,'y':y};
            row.push(shouldLive(grid,cell));
        }
        nextGrid.push(row);
    }
    return nextGrid;
}