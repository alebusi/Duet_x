var pos = 0;
var dir = 0;

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
	  }, 20);
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
  xpos=randomIntFromInterval(0,359); document.getElementById("uno").style.transform = "translate(-50%, -50%) rotate("+xpos+"deg)"; 
}

disegnaCerchio();
