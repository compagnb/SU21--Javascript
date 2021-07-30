var startcontainer=document.getElementById('startcontainer');
var btn=document.querySelector("#startbutton");

btn.addEventListener('click',function(){
	startcontainer.style.opacity=0;
	startcontainer.style.transform='scale(0)';
	window.setTimeout(function(){
		startcontainer.style.display='none';
	},700);
});