//first: recognise click and get class[2]

//VARIABLES
var button = document.querySelectorAll(".btn"); //selecting all .btn
var numButton;
var actionButton; //recognising which action ie symbol button
var equationDraft = []; // user input as an array
var equation; // user input displayed in result box
var resultBox = document.querySelector(".result"); //selecting result box

resultBox.innerHTML = 0; //setting default result box value to zero

//EVENTS

for(var i=0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
    var buttonClickedValue = this.innerHTML; // getting value of element clicked
    var buttonClicked = this; //getting element clicked
    console.log(buttonClicked); 
   
    console.log(buttonClickedValue);
    if ( buttonClicked.classList[2] === "zero-c") {
        resultBox.innerHTML = 0; // resetting value of result box to zero
        equationDraft = []; //emptying equation array
    } else if ( buttonClicked.classList[2] === "delete") {
        equationDraft.pop(); //removing last value inserted
        equation = equationDraft.join("");
        resultBox.innerHTML = equation;
    } else if ( buttonClicked.classList[2] === "equal") {
        equation = equationDraft.join("");
        resultBox.innerHTML = eval(equation);
        equationDraft=[];
    } else {
        equationDraft.push(buttonClickedValue); //creating array of user button selections
        equation = equationDraft.join("");
        resultBox.innerHTML = equation;
    }
    })
    
}

