// 1) querySelector
// Here I use querySelector to grab the first h1 element. 
// I then used the style property to set the text decoration to underline
var titleMegafauna = document.querySelector('h1');
titleMegafauna.style.textDecoration = "underline";

// 2) querySelectorAll
// Here I use querySelectorALl to grab all of the p tag elements. 
// I then loop through all the p tags, adding a new font
var pTags = document.querySelectorAll('p');
for (i = 0; i < pTags.length; i++) {
    pTags[i].style.fontFamily = "'Courier New', monospace";
}

// 3) getElementById
// Here I created a function that takes in two arguments, 
// one expected to be a string of an Id and one a string of a color hex code
// The function then grabs the element by the ID argument and adds style, including thr color of the hex code
function animalContainer(myId, color) {
    var animalContainer = document.getElementById(myId);
    animalContainer.style.backgroundColor = color;
    animalContainer.style.padding = "20px";
    animalContainer.style.margin = "30px";
}
animalContainer("birdContainer", "#2F4858");
animalContainer("whaleContainer", "#33658A");
animalContainer("mammalContainer", "#A4036F")


// 4) getElementsByClassName
// Here I used getElementsByClassName to grab all elements with the class "megafaunaList"
// I then looped through these elements and set their styles
var megafaunaList = document.getElementsByClassName("megafaunaList");
for (var i = 0; i < megafaunaList.length; i++) {
    megafaunaList[i].style.backgroundColor = "#F6AE2D";
    megafaunaList[i].style.margin = "20px 10vw";
    megafaunaList[i].style.padding = "20px";
    megafaunaList[i].style.textAlign = "center";
}

// 5 getElementsByTagName
// /Here I used getElementsByTagName to grab all h2 elements 
// I then looped through these elements and set their styles
var secondHeader = document.getElementsByTagName('h2');
for (var i = 0; i < secondHeader.length; i++) {
    secondHeader[i].style.textAlign = "center";
    secondHeader[i].style.color = "#D4ADCF";
}

// 6 createElement
// Here I created a variable for the section - "container"
// I then used createElement to create a new div
// I used append to add this new elemenet to into the bottom of "container"
// I then styled this new element
var mainContainer = document.getElementById("container")
var giantTurtles = document.createElement("div");
mainContainer.append(giantTurtles);
giantTurtles.style.backgroundColor = "#138A36";
giantTurtles.style.padding = "20px";

// 7) createTextNode
// I used createTextNode to create a new string of text to be displayed, 
// contained in var turtleText.
// I then used the append function to add this new text to be displayed
//  within the div giantTurtles 

var turtleText = document.createTextNode("Giant tortoises were important components of late Cenozoic megafaunas, being present in every nonpolar continent until the arrival of homininans.[29][30] The largest known terrestrial tortoise was Megalochelys atlas, an animal that probably weighed about 1,000 kg.");
giantTurtles.append(turtleText);

// 8) removeChild
// Here I used function remove child to remove the "reptilesAreSad" div from
// the mammalContainer div, it was the 5th child of mammalContainer
mammalContainer.removeChild(mammalContainer.childNodes[5]);

// 9) classList add(), remove(), toggle()

// add()
// Here I used classList.add to add the class of megafaunaList 
// to the recently created element giantTurtles
// I then looped through that class and added a new border
giantTurtles.classList.add("megafaunaList");
for (var i = 0; i < megafaunaList.length; i++) {
    megafaunaList[i].style.border = "solid 5px #F26419";
}

// remove
// Here I used classList.remove to remove the class border from 
// The bird container div
// I then looped through the remaning "border" elements and added some border style
birdContainer.classList.remove("border")
var borderBox = document.getElementsByClassName("border");
for (let i = 0; i < borderBox.length; i++) {
    borderBox[i].style.border = "solid 3px #F26419";
}

// toggle
// Here I grabbed the elements with the class of desktopParagraph 
// I looped through and set the fontsize of these paragraphs to 8px
// It is above and seperate from the toggle loop so that it will affect all of the elements with this class
// (because javascript reads top to bottom)
var desktopP = document.getElementsByClassName("desktopParagraph");
for (let i = 0; i < desktopP.length; i++) {
    desktopP[i].style.fontSize = "8px";
}
// Here we have a conditional statement within a loop 
// This will toggle the class on or off dependant on if the index 
// is even or odd, which is determined via the remainder math function
// I am then able to add a new color to alternating paragraphs
for (let i = 0; i < desktopP.length; i++) {
    if (desktopP[i] % 2) {
        desktopP[i].classList.toggle("desktopParagraph", true);
    } else {
        desktopP[i].classList.toggle("desktopParagraph", false);
    }
    desktopP[i].style.color = "#A4036F";

}








