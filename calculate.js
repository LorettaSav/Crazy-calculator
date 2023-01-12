//first: recognise click and get class[2]

//VARIABLES
var button = document.querySelectorAll(".btn");
var numButton;
var actionButton;
var equationDraft = [];
var equation;
var zeroButton = false;
var backSpaceButton = false;
var resultBox = document.querySelector(".result");
//EVENTS
resultBox.innerHTML = 0;
for(var i=0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
    var buttonClicked = this.classList;
    if ( buttonClicked[2] === "C" ) {
        //resultBox.innerHTML = 0; 
    } else if ( buttonClicked[2] === "←") {
       // resultBox.innerHTML = equationDraft.pop();  
    } else if ( buttonClicked[2] === "=") {
        equationDraft.pop();   
    } else {
        equationDraft.push(buttonClicked);
        equation = equationDraft.join("");
        resultBox.innerHTML = equation;
    }

    })
    
}
