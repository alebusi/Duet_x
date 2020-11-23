var lpos = ["-175","-50","+75"];
var numcar = ["uno","due","tre","quattro"];
var colori = ["white","#FF3300","orange","#4285F4","#0F9D58","transparent"];
var ind_c = 0;
var ind_cm = 0;
var pos = 0;
var dir = 0;
var mod = 1;
var nx = -1;
kd = false;

window.addEventListener("keydown", keypress_handler, false);
window.addEventListener("keyup", keyup_handler, false);

function keypress_handler(event) {
  if (event.keyCode == 37 || event.keyCode == 39) { 
    if (!this.kd) {
	this.kd = true;
        if (event.keyCode == 37) {
          dir = -8;
        }
        if (event.keyCode == 39) {
          dir = 8;
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
  if (nx > 3) {
     nx = 0;
  }
  xpos=randomIntFromInterval(0,2);
  document.getElementById(numcar[nx]).className="mattone";
  document.getElementById(numcar[nx]).style.transform = "translate("+lpos[xpos]+"px, -50%)";
}

function coloreMattone() {
  ind_cm+=1;
  if (ind_cm > colori.length-1) ind_cm=0;
  document.getElementById("uno").style.backgroundColor=colori[ind_cm];
  document.getElementById("due").style.backgroundColor=colori[ind_cm];
  document.getElementById("tre").style.backgroundColor=colori[ind_cm];
  document.getElementById("quattro").style.backgroundColor=colori[ind_cm];
}

function ruotaPagina() {
  document.getElementById("bd").style.transform = "rotate(180deg)";
}

disegnaMattone();
