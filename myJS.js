/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
var count = 0;
document.getElementById("color-block").onclick = function() {changeColor()};

function changeColor(){
    //Write a condition determine what color it should be changed to

    if(count == 0){
        //change the background color using JS
        document.getElementById("color-block").style.background = '#D080F0';
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerHTML = '#D080F0';
        count += 1;
    }
    else{
        count -= 1;
        //change the background color using JS
        document.getElementById("color-block").style.background = '#F08080';
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerHTML = '#F08080'


    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
document.getElementById("convertbtn").addEventListener("click", convertTemp);

function convertTemp(){
    //Calculate the temperature here
    var f = document.getElementById("f-input").value;
    n = (f - 32) * (5/9);
    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerHTML = n;
}


