//function that runs when button is clicked...
function clickMeFunction()
{
    var userInput = "";
    while (userInput !== 'n')
    {
        userInput = prompt("Do you want to quit?");

    }

}

var buttonElement = document.getElementById("button");
buttonElement.onclick = clickMeFunction;