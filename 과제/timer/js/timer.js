
let changeButtons = document.getElementsByClassName("button-start");

let buttonClasses = ["button-start", "button1", "button2"];
let currentButtonIndex = 0;

for (let i = 0; i < changeButtons.length; i++) {
    changeButtons[i].addEventListener("click", function() {
        this.className = buttonClasses[currentButtonIndex];
        
        currentButtonIndex = (currentButtonIndex + 1) % buttonClasses.length;
    });
}



let changeButtons2 = document.getElementsByClassName("button-reset");

let buttonClasses2 = ["button-reset", "button-reset-red"];
let currentButtonIndex2 = 0;

for (let i = 0; i < changeButtons2.length; i++) {
    changeButtons2[i].addEventListener("click", function() {
        this.className = buttonClasses2[currentButtonIndex2];
        
        currentButtonIndex2 = (currentButtonIndex2 + 1) % buttonClasses2.length;
    });
}










let min, sec;
let timer;

function startTimer() {
    min = document.querySelector("#startMin").value; 
    if (min === "") min = 0;
    sec = document.querySelector("#startSec").value;
    if (sec === "") sec = 0;
    timer = setInterval(countTimer, 1000);
}

// if(".button-start"){return ".button-reset"}
for (let i = 1; i <= 3; i++) {
    let numberInput = document.getElementById("myNumberInput" + i);
    numberInput.style.color = "white";
    numberInput.style.fontSize = "32px";
}


// const backgroundImageUrl = '../img/box.png';
// numberInput.style.backgroundImage = `url('${backgroundImageUrl}')`;

