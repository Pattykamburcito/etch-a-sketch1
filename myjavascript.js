const container = document.getElementById('container');

//create a 16x16 grid of divs
for (let i = 0; i < 16 * 16; i++){
    //create a new div element
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
}
function createNewGrid(){
    let squaresPerSide = prompt("Enter the number of squares per side:100");
    squaresPerSide = parseInt(squaresPerSide);

    if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100){
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    container.innerHTML = "";
    let squareSize = 960 / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++){
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.width = squareSize + 'px';
        div.style.height = squareSize + 'px';
        container.appendChild(div);
    }
}
function changeColor(){
    let currentColor = this.style.backgroundColor || 'rgb(182, 136, 201)';
    currentColor = currentColor.match(/\d+/g).map(number);
    
    let newColor = [];
    for(let i = 0 ; i < 3; i++){
        let randomValue = Math.floor(Math.random() * 256);
        newColor.push((currentColor[i] + randomValue) / 2);
    }
    let darkenAmount = 0.1;
    newColor = newColor.map(color => Math.max(0, Math.round(color * (1 - darkenAmount))));
    this.style.backgroundColor = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
}

createNewGrid();
