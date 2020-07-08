var caselle = ["uno","due","tre","quattro","cinque","sei","sette","otto","nove","dieci","undici","dodici"];
var colori = ["#FF3300","orange","#4285F4","#0F9D58"];
var pos = 0;
var dir = 1;
var ind = 0;
var indSave = 0;

function verTastoPremuto(e) {
  if (e.keyCode == 37) {
      dir=-1;
  } else if (e.keyCode == 39) {
      dir=1;
  }
  muoviPallaT(dir);
}

function muoviPallaT(direction) {
		  pos+=direction;
      if (pos > 17) pos=17;
      if (pos < 0) pos=0;
      document.getElementById("elemento").style.top=pos+"%";
}

function muoviPalla(direction) {
    muoviPallaT(direction);
    try {clearInterval(myTimer);}
		catch(err){}
    myTimer = setInterval(function() {
		  pos+=direction;
      if (pos > 17) pos=17;
      if (pos < 0) pos=0;
      document.getElementById("elemento").style.top=pos+"%";
	  }, 24);
}

function resetInt() {
    try {clearInterval(myTimer);}
		catch(err){}
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function disegnaMattoni() {
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

var caselle = ["uno","due","tre","quattro"];
var colori = ["#FF3300","orange","#4285F4","#0F9D58"];
var pos = 50;
var dir = 1;
var ind = 0;
var indSave = 0;

function verTastoPremuto(e) {
  if (e.keyCode == 37) {
      dir=-1;
  } else if (e.keyCode == 39) {
      dir=1;
  }
  muoviPallaT(dir);
}

function muoviPallaT(direction) {
		  pos+=direction;
      if (pos > 90) pos=90;
      if (pos < 10) pos=10;
      document.getElementById("elemento").style.left=pos+"%";
}

function muoviPalla(direction) {
    muoviPallaT(direction);
    try {clearInterval(myTimer);}
		catch(err){}
    myTimer = setInterval(function() {
		  pos+=direction;
      if (pos > 90) pos=90;
      if (pos < 10) pos=10;
      document.getElementById("elemento").style.left=pos+"%";
	  }, 24);
}

function resetInt() {
    try {clearInterval(myTimer);}
		catch(err){}
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function disegnaMattoni() {
    coloraMattoni();
    myTimerBlack = setInterval(coloraMattoni, 4000);
}
  
  
function coloraMattoni() {
      while (ind == indSave) {
          ind=randomIntFromInterval(0,caselle.length - 1);
      }
      for (step = 0; step < caselle.length; step++) { 
          document.getElementById(caselle[step]).style.backgroundColor=colori[ind];
      }
      document.getElementById(caselle[ind]).style.backgroundColor="black";
      document.getElementById("elemento").style.backgroundColor=colori[ind];
      indSave=ind;
}

