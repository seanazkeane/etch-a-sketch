let grid = document.querySelector('.grid');
grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
grid.style.gridTemplateRows = 'repeat(16, 1fr)';

for(let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    grid.insertAdjacentElement("beforeend", square);
    square.addEventListener("mouseover", function() {
        this.style.backgroundColor = 'black';
    });
};

let clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', function(){
    let cols = prompt("What size grid do you want to create?");
    if (cols > 180) {
        alert("Too large! Try again.");
    } else {
        console.log(cols);
        let gridSize = cols * cols;
        console.log(gridSize);
        let squares = grid.querySelectorAll('div');
        squares.forEach((div) => div.remove());
        for(let i = 0; i < gridSize; i++) {
            grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
            grid.style.gridTemplateRows = `repeat(${cols}, 1fr)`;
            let square = document.createElement('div');
            grid.insertAdjacentElement("beforeend", square);
            square.addEventListener("mouseover", function() {
                this.style.backgroundColor = 'black';
            });
        ;}
    }
});
