var startTime;
var currentTime;
var elapsedTime = 0;
var runningtime;
var paused = true;




function togglebutton(){
	paused = paused ? false : true;
	if(!paused){
		startTime = Date.now();
		runningtime = setInterval(run, 1);
	}
	else{
		clearInterval(runningtime);
		runningtime = null;
	}

}


function run(){
	currentTime = Date.now();
	elapsedTime += currentTime - startTime;
	startTime = currentTime;
	display(elapsedTime);
}


function reset(){
	elapsedTime = 0;
	paused = true;
	clearInterval(runningtime);
	document.getElementById('display-area').innerHTML = '00:00:00.000';

}

function display(time){
	var mil = parseInt(time%1000);
	var sec = parseInt((time/1000)%60);
	var min = parseInt((time/(1000*60))%60);
	var hur = parseInt((time/(1000*60*60))%24);

	document.getElementById('display-area').innerHTML = ""  + (hur > 9 ? hur : "0" + hur) +
														":" + (min > 9 ? min : "0" + min) + 
														":" + (sec > 9 ? sec : "0" + sec) +
														"." + mil; 
}

window.onload = function(){
	var tButton = document.getElementById('toggle-button');
	tButton.addEventListener("click",togglebutton);
	
	var rButton = document.getElementById('reset-button');
	rButton.addEventListener("click",reset);
}