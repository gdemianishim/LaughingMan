const SQUARE_COUNT = 3;
const SPEED = 3;
const TIMER_SPEED = 100;

document.addEventListener('DOMContentLoaded', () => {
    let squareElement = document.getElementById("square");
    //let squareElement = document.querySelector("#square");
    squareElement.addEventListener("click", () => {
        alert("OMG YOU CAUGHT ME!");
    });

    let box = document.querySelector("#box");

    for (let i = 0; i < SQUARE_COUNT; i++) {
        //create the square
        let square = document.createElement('img');
        square.src = 'laughing_man.jpg';
        square.alt = 'Catch the Laughing Man!';
        square.className = 'square';
        box.appendChild(square);
        //add it to the screen   
    }
    let allSquares = box.children;
    let squareArray = Array.from(allSquares);
    squareArray.forEach(function (element, index) {
        var dx = SPEED * (Math.random() * 2 - 1);
        var dy = SPEED * (Math.random() * 2 - 1);

            
    if (element.tagName.toLowerCase() === "img") {
        element.addEventListener("mouseover", function () {
            element.src = "orochimaru_50x50.jpg"; 
        });

        element.addEventListener("mouseout", function () {
            element.src = "laughing_man.jpg";
        });
    }



        setInterval(() => {
            let currentLeft = parseInt(element.style.left) || 225;
            let currentTop = parseInt(element.style.Top) || 175;
            if (currentLeft >= 450 || currentLeft <= 0) {


                dx *= -1;
                element.style.borderColor = getColor();
                element.style.backgroundColor = getColor();
            }

            if (currentTop >= 350 || currentTop <= 0) {
                dy *= -1;
                element.style.borderColor = getColor();
                element.style.backgroundColor = getColor();
            }

            

            // {
            //     dx*=-1
            //     element.style.borderColor = getRandomColor();

            // }

            //     if (currentTop >=350 || currentTop <=0)
            // {
            //     dy*=-1
            //      element.style.borderColor = getRandomColor();
            // }        

            element.style.left = (currentLeft + dx) + "px"
            element.style.Top = (currentTop + dx) + "px"

        }, TIMER_SPEED);

    });

});

function getRandomColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},rgb(${g},rgb(${b})`;

    // var r = parsInt (amath.random()*256);
    // var g = parsInt (amath.random()*256);
    // var b = parsInt (amath.random()*256);
    // let color = `rgb(${r},rgb(${g},rgb(${b})`;
    // return color;
}

//homework 