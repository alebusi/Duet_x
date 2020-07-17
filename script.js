var pos = 0;
var dir = 0;
var mod = 1;
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
    document.getElementById("elemento").style.transform = "translate(-50%, -50%) rotate("+pos+"deg)"; 
}

function muoviElemento(direction) {
    muoviElementoT(direction);
    try {clearInterval(myTimer);}
		catch(err){}
    myTimer = setInterval(function() {
		  pos+=direction;
      document.getElementById("elemento").style.transform = "translate(-50%, -50%) rotate("+pos+"deg)";
	  }, 60);
}

function resetInt() {
    try {clearInterval(myTimer);}
		catch(err){}
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function disegnaCerchio() {
    bucaCerchio();
    myTimerCerchio = setInterval(bucaCerchio, 4000);
}
  
function bucaCerchio() {
  if (mod == 1) {
     xpos=randomIntFromInterval(0,359); document.getElementById("uno").style.transform = "translate(-50%, -50%) rotate("+xpos+"deg)"; 
  }
  else {
     xpos=randomIntFromInterval(0,359); document.getElementById("due").style.transform = "translate(-50%, -50%) rotate("+xpos+"deg)"; 
  }
  if (mod == 1) {
     mod = 2;
  }
  else {
     mod = 1;
  }
}

disegnaCerchio();
setTimeout(function(){ document.getElementById("due").className="cerchio"; }, 4000);
