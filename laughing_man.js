const SQUARE_COUNT = 30;
const SPEED = 10;
const TIMER_SPEED = 100;

document.addEventListener('DOMContentLoaded', () => {
    let squareElement = document.getElementById("square");
    //let squareElement = document.querySelector("#square");
    squareElement.addEventListener("click", () => {
        alert("OMG YOU CAUGHT ME!");
    });
    // change square color to random color on hover
    squareElement.addEventListener('mouseover', () => {
        squareElement.style.backgroundColor = getRandomColor();
    });

    let box = document.querySelector("#box");

    for (let i = 0; i < SQUARE_COUNT; i++) {
        // create the square
        let square = document.createElement('img');
        square.src = 'laughing_man.jpg';
        square.alt = 'Catch the laughing man!';
        square.className = 'square';
        // change image on hover, revert on mouseout
        square.addEventListener('mouseover', () => {
            square.src = 'orochimaru_50x50.jpg';
        });
        square.addEventListener('mouseout', () => {
            square.src = 'laughing_man.jpg';
        });
        box.appendChild(square);
        // add it to the screen
    }

    let allSquares = box.children;
    let squareArray = Array.from(allSquares);
    squareArray.forEach((element) => {
        var dx = SPEED * (Math.random() * 2 - 1);
        var dy = SPEED * (Math.random() * 2 - 1);

        setInterval(() => {
            let currentLeft = parseFloat(element.style.left) || 225;
            let currentTop = parseFloat(element.style.top) || 175;

            if (currentLeft >= 450 || currentLeft <= 0) {
                dx *= -1;
                element.style.borderColor = getRandomColor();
            }
            if (currentTop >= 350 || currentTop <= 0) {
                dy *= -1;
                element.style.borderColor = getRandomColor();
            }

            element.style.left = (currentLeft + dx) + "px";
            element.style.top = (currentTop + dy) + "px";
        }, TIMER_SPEED);
    });
});

function getRandomColor() {
    let r = parseInt(Math.random() * 256);
    let g = parseInt(Math.random() * 256);
    let b = parseInt(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
