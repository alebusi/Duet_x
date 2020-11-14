var lpos = [40,50,60];
var numcar = ["uno","due","tre","quattro"];
var colori = ["white","#FF3300","orange","#4285F4","#0F9D58","black"];
var ind_c = 0;
var pos = 0;
var dir = 0;
var mod = 1;
var nx = 0;
kd = false;

window.addEventListener("keydown", keypress_handler, false);
window.addEventListener("keyup", keyup_handler, false);

function keypress_handler(event) {
  if (event.keyCode == 37 || event.keyCode == 39) { 
    if (!this.kd) {
	this.kd = true;
        if (event.keyCode == 37) {
          dir = -6;
        }
        if (event.keyCode == 39) {
          dir = 6;
        }
        sterza = setInterval(function() {
		muoviElementoT(dir);
		}, 60);
    }
  }	
}

function keyup_handler(event) {
  if (event.keyCode == 37 || event.keyCode == 39) {
        this.kd = false;
	    try {clearInterval(sterza);}
		catch{}
  }
}

function muoviElementoT(direction) {
    pos+=direction;
    document.getElementById("griglia").style.transform = "translate(-50%, -50%) rotate("+pos+"deg)"; 
}

function muoviElemento(direction) {
    muoviElementoT(direction);
    try {clearInterval(myTimer);}
		catch(err){}
    myTimer = setInterval(function() {
		  pos+=direction;
      document.getElementById("griglia").style.transform = "translate(-50%, -50%) rotate("+pos+"deg)";
	  }, 60);
}

function resetInt() {
    try {clearInterval(myTimer);}
		catch(err){}
}

function cambioColore(td) {
  ind_c+=1;
  if (ind_c > colori.length-1) ind_c=0;
     td.style.backgroundColor = colori[ind_c];
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function disegnaMattone() {
    posizionaMattone();
    myTimerCerchio = setInterval(posizionaMattone, 1500);
}
  
function posizionaMattone() {
  nx+=1;
  if (nx > 4) {
     nx = 1;
  }
  switch(nx) {
    case 1:
      xpos=randomIntFromInterval(0,2); document.getElementById("uno").style.left = lpos[xpos]+"%";
      break;
    case 2:
	document.getElementById("due").className="mattone";
      xpos=randomIntFromInterval(0,2); document.getElementById("due").style.left = lpos[xpos]+"%";
      break;
    case 3:
	document.getElementById("tre").className="mattone";
      xpos=randomIntFromInterval(0,2); document.getElementById("tre").style.left = lpos[xpos]+"%";
      break;
    case 4:
        document.getElementById("quattro").className="mattone";
      xpos=randomIntFromInterval(0,2); document.getElementById("quattro").style.left = lpos[xpos]+"%";
      break;
  }
}

disegnaMattone();
/*
setTimeout(function(){ document.getElementById("due").className="mattone"; }, 1500);
setTimeout(function(){ document.getElementById("tre").className="mattone"; }, 1500);
setTimeout(function(){ document.getElementById("quattro").className="mattone"; }, 1500);
*/
