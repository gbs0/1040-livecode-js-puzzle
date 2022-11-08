const tiles = document.querySelectorAll("td");
const button = document.getElementById("show-hint");

button.addEventListener(("click"), (event) => {
    const hintDiv = document.querySelector(".hint");
    hintDiv.classList.toggle("active");
})

const moveTile = (tile) => {
    // 1. Encontrar qual o elemento que está com a classe empty
    // 2. Substituir o valor da tile vazia pelo valor do parametro tile
    // 3. Remover a classe empty da emptyTile
    // 4. Adicionar a classe empty na tile
    // 5. Remover o numero da tile
    const emptyTile = document.querySelector(".empty");
    emptyTile.innerHTML = tile.innerHTML;
    emptyTile.classList.remove("empty");
    tile.innerHTML = "";
    tile.classList.add("empty");
}

const canMove = (tile) => {
    const tileColumn = tile.cellIndex;
    const tileRow = tile.parentElement.rowIndex;
    const emptyTile = document.querySelector(".empty");
    const emptyTileColumn = emptyTile.cellIndex;
    const emptyTileRow = emptyTile.parentElement.rowIndex;
    // Procurar qual o indice da tile que contem a classe "empty"
    // Encontrar os indices da emptyTile

            // Verifica se podemos movimentar um tile para cima
    return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) || 
           // Verifica se podemos movimentar um tile para baixo
           (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) ||
           // Verifica se podemos movimentar um tile para esquerda
           (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
           // Verifica se podemos movimentar um tile para direita
           (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1); 
}

const checkVictory = () => {
    const arrayTiles = Array.from(tiles).map(tile => Number.parseInt(tile.innerHTML, 10));
    if (arrayTiles.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
        alert("Você venceu!");
    }
}
tiles.forEach((tile) => {
    tile.addEventListener("click", (event) => {
        // Precisa verificar se a tile pode se mover
        // Caso a tile possa ser movida
        // Iremos chamar uma função para mover a tile
        // Verificar e o jogador venceu!
        // moveTile(event.currentTarget);
        console.log(event.currentTarget);
        if (canMove(event.currentTarget)) {
            moveTile(event.currentTarget);
            setTimeout(() => {  checkVictory() }, 300);
        }  
    })
})


