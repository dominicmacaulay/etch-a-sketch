const container = document.querySelector('#container');
const button = document.querySelector('#resize');

sizeBoxes(16);

button.addEventListener('click', () => {
    const userInput = prompt('Choose a number between 1-100');
    if (userInput > 0 && userInput < 101){
        while (container.firstChild){
            container.removeChild(container.firstChild);
        };
        sizeBoxes(userInput);
    } else{
        alert('Your input is out of the defined range...')
    }
});

function sizeBoxes(numOfBoxes){
    let boxesMade = 1;
    let measurement = (960 / numOfBoxes) -2;
    let pixels = measurement + "px";

    while (boxesMade <= (numOfBoxes * numOfBoxes)){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'grid');
        newDiv.style.width = pixels;
        newDiv.style.height = pixels;
        newDiv.addEventListener("mouseover", () => {
            newDiv.classList.add('filled');
        });
        container.appendChild(newDiv);
        boxesMade ++;
    }
}

