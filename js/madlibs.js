
var person="";
var adjective="";
var noun="";
var insect="";
var noun2="";
var verb=""
var story="";

function submitInputs() { //The user has hit Submit. Collects data from the form.
  person=document.getElementById('person').value;
  adjective=document.getElementById('adjective').value;
  noun=document.getElementById('noun').value;
  insect=document.getElementById('insect').value;
  noun2=document.getElementById('noun2').value;
  verb=document.getElementById('verb').value;

  createMadLibs(); //Calls the function to write the story.
}

function clearForm() {
}

function autoFill() {
}

function createMadLibs() { //Creates the story.
  document.getElementById("story").innerHTML="<h1>Mad with the Libs</h1><hr><h3>This is a story about "+person+". They are so "+adjective+" and has big flat "+noun+". When our "+insect+" meets, we disected a "+noun2+". When we spend time together nearly "+verb+" out of my chair. </h3>";
}

