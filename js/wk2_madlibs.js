// GLOBAL variables!
var boyName="";
var adjective="";
var pluralNoun="";
var insect="";
var pluralNoun2="";
var verb="";
// let boyName="";
// const boyName="";
var story="";

const populatedInputs={boyName:"Chris", adjective:"silly", pluralNoun: "frogs", insect:"mosquito", pluralNoun2:"boxes", verb:"run" };



// Syntax of a function
// function nameOfFuntion(parameters){

// }
function getInput(){ //we want this to run when the user hits submit
	boyName=document.getElementById('person').value;
	adjective=document.getElementById('adjective').value;
	pluralNoun=document.getElementById('noun').value;
	insect=document.getElementById('insect').value;
	pluralNoun2=document.getElementById('noun2').value;
	verb=document.getElementById('verb').value;
	console.log(boyName); // prints in console

	// createStory();
}

function resetForm(){
	document.getElementById('person').value="";
	document.getElementById('adjective').value="";
	document.getElementById('noun').value="";
	document.getElementById('insect').value="";
	document.getElementById('noun2').value="";
	document.getElementById('verb').value="";
	document.getElementById('story').innerHTML="";
}

function autoPopulate(){
	if(document.getElementById('person').value==""){
		document.getElementById('person').value=populatedInputs.boyName;
	}
	if(document.getElementById('adjective').value==""){
		document.getElementById('adjective').value=populatedInputs.adjective;	
	}	
	if(document.getElementById('noun').value==""){
		document.getElementById('noun').value=populatedInputs.pluralNoun;
	}
	if(document.getElementById('insect').value==""){
		document.getElementById('insect').value=populatedInputs.insect;
	}
	if(document.getElementById('pluralNoun2').value==""){
		document.getElementById('noun2').value=populatedInputs.pluralNoun2;
	}
	if(document.getElementById('verb').value==""){
		document.getElementById('verb').value=populatedInputs.verb;
	}
}

function createStory(){
	story='<h1>Mad with the Libs</h1><hr><h3>This is a story about<span class="person">'+boyName+'</span>. They are so <span class="adjective">'+adjective+'</span> and has big flat <span class="noun">'+pluralNoun+'</span>. When our <span class="insect">'+insect+'</span> meets, we disected a <span class="noun2">'+pluralNoun2+'</span>. When we spend time together nearly <span class="verb">'+verb+'</span> out of my chair. </h3>';
	document.getElementById("story").innerHTML=story;
}










