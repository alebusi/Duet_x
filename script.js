var caselle = ["uno","due","tre","quattro","cinque","sei","sette","otto","nove","dieci","undici","dodici"];
var colori = ["#FF3300","orange","#4285F4","#0F9D58"];
var pos = 0;
var dir = 1;
var ind = 0;
var indSave = 0;

function verTastoPremuto(e) {
  if (e.keyCode == 37) {
      dir=-3;
  } else if (e.keyCode == 39) {
      dir=3;
  }
  muoviElementoT(dir);
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
	  }, 24);
}

function resetInt() {
    try {clearInterval(myTimer);}
		catch(err){}
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function disegnaCerchi() {
    coloraMattoni();
    myTimerBlack = setInterval(coloraMattoni, 60000);
}
  
function coloraMattoni() {
   ind_start=0;
   while (ind_start < 10) {
      ind=ind_start+randomIntFromInterval(0,2);

      for (step = ind_start; step < ind_start+3; step++) {
        if (step == ind) {
           document.getElementById(caselle[step]).style.backgroundColor="#ff3300";
        }
        else {
           document.getElementById(caselle[step]).style.backgroundColor="black";
        }
      }
      ind_start+=3;
   }
}
