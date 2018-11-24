var cards = ["0", "1", "2", "3", "4", "5", "7", "8", "9", "S", "R", "W", "+2", "+4"];
var color = ["red", "green", "blue", "#cac418"];
var num = document.getElementById("number");
var c = document.getElementsByClassName("number");
var playerClass = document.getElementById("playerCard");
var drawCardsValue = document.getElementById("Draw")
var unoValue = document.getElementById("Uno");
var chance = document.getElementById("ChanceText");
var scoreShow = document.getElementById("result");
var cpuscore = document.getElementById("cpuScore");
var ps = document.getElementById("playerScore");
var winner = document.getElementById("win");
var colorPick=document.getElementById("colorChoose");
var count=0;
var cpucard = 0;
var drawcards = 0;
var playvalue = 0;
var unoCliked = 0;
var b = 8;
var playerplay = 0;
var wins;
var sum;
var colorChange;
var colorChoice;
function newGame() {
  unoValue.style.pointerEvents = "auto";
  drawCardsValue.style.pointerEvents = "auto";
  playerClass.style.pointerEvents = "auto";
  if(count>0){
  	location.reload();
  }
  else{
  var cpuplay = document.getElementById("cpuStart");
  cpuplay.innerHTML = Math.floor(Math.random() * 10);
  var playerplay = document.getElementById("playerStart");
  playerplay.innerHTML = Math.floor(Math.random() * 10)
  var cardsInnerValue = document.getElementsByClassName('number');
  var knowRules = confirm("Do you want to start new game");
  if (knowRules === true) {
    for (var i = 0; i < 7; i++) {
      cardsInnerValue[i].innerHTML = cards[Math.floor(Math.random() * 14)];
    }
    for (var i = 0; i < 7; i++) {
      document.getElementsByClassName('backCard')[i].innerHTML = cards[Math.floor(Math.random() * 14)];
    }
    num.innerHTML = cards[Math.floor(Math.random() * 9)];
    for (var i = 0; i < 7; i++) {
      colorCard(c[i], i);
    }
    if (cpuplay.innerHTML > playerplay.innerHTML) {
      chance.innerHTML = "Cpu will start first";
      playCpu();
    } else {
      chance.innerHTML = "You will start first";

    }
  } else
    chance.innerHTML = "";

 }
 count++;
}
function colorCard(card, i) {
  var cardsInnerValue = document.getElementsByClassName("number")
  if (true) {
    card.style.background = color[Math.floor(Math.random() * 4)];
    card.style.color = "white";
    document.getElementsByClassName("backCard")[i].style.background = color[Math.floor(Math.random() * 4)];
    document.getElementsByClassName("backCard")[i].style.color = "white";
    document.getElementsByClassName("backCard")[i].style.fontSize = "0px";
    if (cardsInnerValue[i].innerHTML == "+4" || cardsInnerValue[i].innerHTML == "W") {
      card.style.background = "black";
    }
    if (document.getElementsByClassName('backCard')[i].innerHTML == "+4" || document.getElementsByClassName('backCard')[i].innerHTML == "W") {
      document.getElementsByClassName("backCard")[i].style.background = "black";
    }

  }
  num.style.background = color[Math.floor(Math.random() * 4)];

}
function hide(value){
    colorChoice =value;
    num.style.background = colorChoice
    colorPick.style.display="none"; 
    chance.innerHTML = "Color chances to" + colorChoice;
}
function check(i) {
  var playerCardValue = document.getElementById("c" + i);
  var cardsInnerValue = document.getElementById("card" + i)
  if (cardsInnerValue.innerHTML == "W") {
    colorPick.style.display="block";
    num.innerHTML = "";
    playerCardValue.outerHTML = "";
    playerplay = 1;
    setTimeout(playCpu,3000);
} else if (cardsInnerValue.innerHTML == "+4") {
    colorPick.style.display="block";
    chance.innerHTML = "Color chances to" + colorChoice + "Cpu Drawn four cards";
    num.innerHTML = "+4";
    playerCardValue.outerHTML = "";
    playerplay = 1;
    for (var i = 0; i < 4; i++) {
      cpudrawTwoFourCards();
    }
    
  } else if (num.innerHTML == cardsInnerValue.innerHTML || num.style.background == cardsInnerValue.style.background) {
    if (cardsInnerValue.innerHTML == "S" || cardsInnerValue.innerHTML == "R") {
      num.style.background = cardsInnerValue.style.background;
      num.innerHTML = cardsInnerValue.innerHTML;
      playerCardValue.outerHTML = "";
      playerplay = 1;
      chance.innerHTML = "Your turn again"
    } else if (cardsInnerValue.innerHTML == "+2") {
      num.style.background = cardsInnerValue.style.background;
      num.innerHTML = cardsInnerValue.innerHTML;
      playerplay = 1;
      playerCardValue.outerHTML = "";
      chance.innerHTML = "Cpu Drawn two cards"
      for (var i = 0; i < 2; i++) {
        cpudrawTwoFourCards();
      }

    } else {
      num.style.background = cardsInnerValue.style.background;
      num.innerHTML = cardsInnerValue.innerHTML;
      playerCardValue.outerHTML = "";
      playerplay = 1;
      playCpu();

    }
       
  }
  if (playerplay == 0) {
    chance.innerHTML = "Draw a card";
    playerplay = 0;
  }
  unoClick();
   win();
}
 function playCpu() {
 debugger;
if(document.getElementsByClassName("playerCardClass").length==0){
	chance.innerHTML="Game Over"
}
else{
  var value = document.getElementsByClassName("cpuCardClass").length;
  for (var i = 0; i <= value - 1; i++) {
    var innervalue = num.innerHTML == document.getElementsByClassName('backCard')[i].innerHTML;
    var colorvalue = num.style.background == document.getElementsByClassName("backCard")[i].style.background;
    if (innervalue || colorvalue) {
      if (document.getElementsByClassName('backCard')[i].innerHTML == "S") {

        num.style.background = document.getElementsByClassName("backCard")[i].style.background;
        num.innerHTML = document.getElementsByClassName("backCard")[i].innerHTML;
        document.getElementsByClassName("cpuCardClass")[i].outerHTML = "";
        playCpu();
        chance.innerHTML = "Cpu turn again"
        drawcards=0;
        cpucard = 1;
   
        break;
      } else if (document.getElementsByClassName('backCard')[i].innerHTML == "R") {

        num.style.background = document.getElementsByClassName("backCard")[i].style.background;
        num.innerHTML = document.getElementsByClassName("backCard")[i].innerHTML;
        console.log(b);
        document.getElementsByClassName("cpuCardClass")[i].outerHTML = "";
        chance.innerHTML = "Cpu turn again";
        playCpu();
   
        drawcards=0;
        cpucard = 1;
        break;
      } else if (document.getElementsByClassName('backCard')[i].innerHTML == "+2") {
        num.style.background = document.getElementsByClassName("backCard")[i].style.background;
        num.innerHTML = document.getElementsByClassName("backCard")[i].innerHTML;
        document.getElementsByClassName("cpuCardClass")[i].outerHTML = "";
        cpucard = 1;
        for (var i = 0; i < 2; i++) {
          drawTwoFourCards();
         }
         playCpu();
        break;
      } else {
        num.style.background = document.getElementsByClassName("backCard")[i].style.background
        num.innerHTML = document.getElementsByClassName("backCard")[i].innerHTML;
        document.getElementsByClassName("cpuCardClass")[i].outerHTML = "";
   
        drawcards=0;
        cpucard = 1;
        break;
      }
      break;
      
    } else {
      cpucard = 0;
    }

  }
  if (cpucard == 0) {
    for (var i = 0; i <=value-1; i++) {

      if (document.getElementsByClassName('backCard')[i].innerHTML == "W") {
        num.style.background = color[Math.floor(Math.random() * 4)];
        num.innerHTML = "W";
        document.getElementsByClassName("cpuCardClass")[i].outerHTML = "";
        chance.innerHTML = "Color chances to" + num.style.background;
        drawcards = 0;
   
        break;
      } else if (document.getElementsByClassName('backCard')[i].innerHTML == "+4") {
        num.style.background = color[Math.floor(Math.random() * 4)];
        num.innerHTML = "+4";
        document.getElementsByClassName("cpuCardClass")[i].outerHTML = "";
        chance.innerHTML = "Player Drawn four  cards" + "Color chances to" + num.style.background;
        drawcards = 0;
   
        for (var i = 0; i < 4; i++) {
          drawTwoFourCards();
        }
         setTimeout(playCpu,1000);
        break;
      } else {
        drawcards = 1;

      }
    }
    
  }
  if (drawcards == 1) {
    cpudrawCards();
    chance.innerHTML = "cpu Drawn Cards";
  }
  win();

}
}
function drawCards() {
	++b;
  console.log(b);
  var addCards = '<div  id="c' + b + '" class="playerCardClass" onclick="check(' + b + ')"><div class="number" id="card' + b + '"></div><div class="innerCard"></div></div>';
  document.getElementById("playerCard").innerHTML += addCards;
  document.getElementById("card" + b).innerHTML = cards[Math.floor(Math.random() * 14)];
  document.getElementById("card" + b).style.background = color[Math.floor(Math.random() * 4)];
  if (document.getElementById("card" + b).innerHTML == "+4" || document.getElementById("card" + b).innerHTML == "W") {
    document.getElementById("card" + b).style.background = "black";
  }
  var innervalue = num.innerHTML == document.getElementById("card" + b).innerHTML;
  var colorvalue = num.style.background == document.getElementById("card" + b).style.background;
  if (innervalue || colorvalue) {
    chance.innerHTML = "You can place Cards";
  } else if (document.getElementById("card" + b).innerHTML == "W" || document.getElementById("card" + b).innerHTML == "+4") {
    chance.innerHTML = "You can place Cards";
  } else {
    playCpu();
  }
   unoCliked = 0;

}

function drawTwoFourCards() {
	  ++b;
  console.log(b);
  var addCards = '<div  id="c' + b + '" class="playerCardClass" onclick="check(' + b + ')"><div class="number" id="card' + b + '"></div><div class="innerCard"></div></div>';
  document.getElementById("playerCard").innerHTML += addCards;
  document.getElementById("card" + b).innerHTML = cards[Math.floor(Math.random() * 14)];
  document.getElementById("card" + b).style.background = color[Math.floor(Math.random() * 4)];
  if (document.getElementById("card" + b).innerHTML == "+4" || document.getElementById("card" + b).innerHTML == "W") {
    document.getElementById("card" + b).style.background = "black";
  }
   unoCliked = 0;
}

function cpudrawCards() {
  var x = document.getElementsByClassName("cpuCardClass").length;
  var addCpuCards = '<div class="cpuCardClass"><div class="backCard"></div><div class="innerCard"><div style="background: orangered;"></div><div style="background: green;"></div><div style="background: yellow;"></div><div style="background: lightblue;"></div></div></div>'
  document.getElementsByClassName("cpucard")[0].innerHTML += addCpuCards;
  document.getElementsByClassName('backCard')[x].innerHTML = cards[Math.floor(Math.random() * 14)];
  document.getElementsByClassName("backCard")[x].style.background = color[Math.floor(Math.random() * 4)];
  document.getElementsByClassName("backCard")[x].style.color = "white";
  document.getElementsByClassName("backCard")[x].style.fontSize = "0px";
  var innervalue = num.innerHTML == document.getElementsByClassName('backCard')[x].innerHTML;
  var colorvalue = num.style.background == document.getElementsByClassName("backCard")[x].style.background;
  if (innervalue || colorvalue) {
   if (document.getElementsByClassName('backCard')[x].innerHTML == "S") {

        num.style.background = document.getElementsByClassName("backCard")[x].style.background;
        num.innerHTML = document.getElementsByClassName("backCard")[x].innerHTML;
        document.getElementsByClassName("cpuCardClass")[x].outerHTML = "";
        playCpu();
        chance.innerHTML = "Cpu turn again"

        cpucard = 1;
    
    
      } else if (document.getElementsByClassName('backCard')[x].innerHTML == "R") {

        num.style.background = document.getElementsByClassName("backCard")[x].style.background;
        num.innerHTML = document.getElementsByClassName("backCard")[x].innerHTML;
        document.getElementsByClassName("cpuCardClass")[x].outerHTML = "";
        chance.innerHTML = "Cpu turn again";
        playCpu();


        cpucard = 1;
    
      } else if (document.getElementsByClassName('backCard')[x].innerHTML == "+2") {
        num.style.background = document.getElementsByClassName("backCard")[x].style.background;
        num.innerHTML = document.getElementsByClassName("backCard")[x].innerHTML;
        document.getElementsByClassName("cpuCardClass")[x].outerHTML = "";
        cpucard = 1;
        for (var i = 0; i < 2; i++) {
          drawTwoFourCards();

        }
    
      } else {
        num.style.background = document.getElementsByClassName("backCard")[x].style.background
        num.innerHTML = document.getElementsByClassName("backCard")[x].innerHTML;
        document.getElementsByClassName("cpuCardClass")[x].outerHTML = "";
        cpucard = 1;
    
      }

  } else {
    if (document.getElementsByClassName('backCard')[x].innerHTML == "W") {
      num.style.background = color[Math.floor(Math.random() * 4)];
      num.innerHTML = "W";
      document.getElementsByClassName("cpuCardClass")[x].outerHTML = "";
      chance.innerHTML = "Color chances to" + num.style.background;

    } else if (document.getElementsByClassName('backCard')[x].innerHTML == "+4") {
      num.style.background = color[Math.floor(Math.random() * 4)];
      num.innerHTML = "+4";
      document.getElementsByClassName("cpuCardClass")[x].outerHTML = "";
      chance.innerHTML = "Player Drawn four cards" + "Color chances to" + num.style.background;
      for (var i = 0; i < 4; i++) {
        drawTwoFourCards();
      }
      playCpu();
    }
  }
   
}

function cpudrawTwoFourCards() {

  var x = document.getElementsByClassName("cpuCardClass").length;
  console.log(x);
  var addCpuCards = '<div  class="cpuCardClass"><div class="backCard"></div><div class="innerCard"><div style="background: orangered;"></div><div style="background: green;"></div><div style="background: yellow;"></div><div style="background: lightblue;"></div></div></div>'
  document.getElementsByClassName("cpucard")[0].innerHTML += addCpuCards;
  document.getElementsByClassName('backCard')[x].innerHTML = cards[Math.floor(Math.random() * 14)];
  document.getElementsByClassName("backCard")[x].style.background = color[Math.floor(Math.random() * 4)];
  document.getElementsByClassName("backCard")[x].style.color = "white";
  document.getElementsByClassName("backCard")[x].style.fontSize = "0px";
  if (document.getElementsByClassName('backCard')[x].innerHTML == "+4" || document.getElementsByClassName('backCard')[x].innerHTML == "W") {
    document.getElementsByClassName("backCard")[x].style.background = "black";
  }
  
}

function win() {
  sum = 0;
  if (document.getElementsByClassName("playerCardClass").length == 0) {
    var x = document.getElementsByClassName("cpuCardClass").length;
    for (i = 0; i <= x - 1; i++) {

      if (document.getElementsByClassName('backCard')[i].innerHTML == "R" || document.getElementsByClassName('backCard')[i].innerHTML == "S") {
        sum += 20;

      } else if (document.getElementsByClassName('backCard')[i].innerHTML == "W" || document.getElementsByClassName('backCard')[i].innerHTML == "+4") {
        sum += 50;

      } else if (document.getElementsByClassName('backCard')[i].innerHTML == "+2") {
        sum += 20;

      } else {
        var num = document.getElementsByClassName('backCard')[i].innerHTML;
        switch (num) {
          case "0":
            sum += 0;
            break;
          case "1":
            sum += 1;
            break;
          case "2":
            sum += 2;
            break;
          case "3":
            sum += 3;
            break;
          case "4":
            sum += 4;
            break;
          case "5":
            sum += 5;
            break;
          case "6":
            sum += 6;
            break;
          case "7":
            sum += 7;
            break;
          case "8":
            sum += 8;
            break;
          case "9":
            sum += 9;
            break;

        }
      }
    }
    chance.innerHTML = sum + "Player Wins";

    unoValue.style.pointerEvents = "none";
    drawCardsValue.style.pointerEvents = "none";
    playerClass.style.pointerEvents = "none";
    showCpuCard();
    scoreCard(1);
    clearTimeout(wins);
  } else if (document.getElementsByClassName("cpuCardClass").length == 0) {
    var x = document.getElementsByClassName("playerCardClass").length;
    for (i = 0; i <= x - 1; i++) {

      if (document.getElementsByClassName('number')[i].innerHTML == "R" || document.getElementsByClassName('number')[i].innerHTML == "S") {
        sum += 20;


      } else if (document.getElementsByClassName('number')[i].innerHTML == "W" || document.getElementsByClassName('number')[i].innerHTML == "+4") {
        sum += 50;

      } else if (document.getElementsByClassName('number')[i].innerHTML == "+2") {
        sum += 20;

      } else {
        var num = document.getElementsByClassName('number')[i].innerHTML;
        switch (num) {
          case "0":
            sum += 0;
            break;
          case "1":
            sum += 1;
            break;
          case "2":
            sum += 2;
            break;
          case "3":
            sum += 3;
            break;
          case "4":
            sum += 4;
            break;
          case "5":
            sum += 5;
            break;
          case "6":
            sum += 6;
            break;
          case "7":
            sum += 7;
            break;
          case "8":
            sum += 8;
            break;
          case "9":
            sum += 9;
            break;

        }
      }
    }

    chance.innerHTML = sum + "CpuWins"
    clearTimeout(wins);
    scoreCard(0);
    unoValue.style.pointerEvents = "none";
    drawCardsValue.style.pointerEvents = "none";
    playerClass.style.pointerEvents = "none";

  }

}      

function Uno() {
  unoCliked = 1;
}

function unoClick() {
  if (document.getElementsByClassName("playerCardClass").length == 1) {
    if (unoCliked != 1) {
      ("Not clicked Uno Button")
      for (var i = 0; i < 2; i++) {
        drawTwoFourCards();
      }
    }

  }
}

function showCpuCard() {
 
  var x = document.getElementsByClassName("cpuCardClass").length;
  console.log(x);
  for (var i = 0; i <= x - 1; i++) {
    document.getElementsByClassName("cpuCardClass")[i].style.background = document.getElementsByClassName("backCard")[i].style.background;
    document.getElementsByClassName("innerCard")[i].innerHTML = "";
    document.getElementsByClassName("backCard")[i].style.Zindex = "1";
    document.getElementsByClassName("backCard")[i].style.fontSize = "48px";
  }
}

function scoreCard(turn) {
  if (turn == 1) {
    scoreShow.style.display = "block";
    cpuScore.innerHTML = "0";
    ps.innerHTML = sum;
    winner.innerHTML = "Player";
  } else if (turn == 0) {
    scoreShow.style.display = "block";
    cpuScore.innerHTML = sum;
    ps.innerHTML = "0";
    winner.innerHTML = "Cpu";
  }
}
