var dice1 = document.getElementById("dice1"),
    dice2 = document.getElementById("dice2"),
    dice3 = document.getElementById("dice3"),
    dice4 = document.getElementById("dice4"),
    dice5 = document.getElementById("dice5");
//Hold buttons
var h1 = false,
    h2 = false,
    h3 = false,
    h4 = false,
    h5 = false;
//Number of dice rolls for current hand
var rollNum = 0;
//dice values
var diceNum = null,
    diceArray = [],
    uniqueArray = [],
    diceVal1 = 4,
    diceVal2 = 4,
    diceVal3 = 4,
    diceVal4 = 4,
    diceVal5 = 4;
//score values
var uptotal = 0,
    upbool = false,
    total = 0,
    yahttotal = 0;
var turnCount = 0;

function rollDice(el){
    var timer = setInterval(function(){
        diceNum = Math.floor((Math.random()*6)+1);    
        el.style.backgroundImage = "url("+diceNum+".png)";
    }, 125);
    setTimeout(function(){
        clearInterval(timer)
    },1000)
    return diceNum;
}
function countUpper(num, numscore){
    var score = 0;
    if(diceVal1 == num){
            score = score + num;
    }
    if(diceVal2 == num){
            score = score + num;
    }
    if(diceVal3 == num){
            score = score + num;
    }
    if(diceVal4 == num){
            score = score + num;
    }
    if(diceVal5 == num){
            score = score + num;
    }
    document.getElementById(numscore).innerHTML = score;
    uptotal = uptotal + score;
    total = total + score;
    if(uptotal >= 63){
        if(upbool == false){
            uptotal = uptotal + 35;
            total = total + 35;
            document.getElementById("upperbonus").innerHTML = 35;
            upbool = true;
        }
    }
    document.getElementById("subtotal").innerHTML = uptotal;
    document.getElementById("totalscore").innerHTML = total;
    deHold();
        
}
function deHold(){
    h1 = false;
    document.getElementById("hold1").style.backgroundColor = "#e1e1e1"
    document.getElementById("hold1").style.color = "#000000"
    h2 = false;
    document.getElementById("hold2").style.backgroundColor = "#e1e1e1"
    document.getElementById("hold2").style.color = "#000000"
    h3 = false;
    document.getElementById("hold3").style.backgroundColor = "#e1e1e1"
    document.getElementById("hold3").style.color = "#000000"
    h4 = false;
    document.getElementById("hold4").style.backgroundColor = "#e1e1e1"
    document.getElementById("hold4").style.color = "#000000"
    h5 = false;
    document.getElementById("hold5").style.backgroundColor = "#e1e1e1"
    document.getElementById("hold5").style.color = "#000000"
    rollNum = 0;
}
function makeArray(){
    diceArray = [diceVal1, diceVal2, diceVal3, diceVal4, diceVal5];
    diceArray.sort(function(a, b){return a - b});
}
function count(el){
    var count = 0;
    for(var i = 0; i < diceArray.length; ++i){
        if(diceArray[i] == el){
            count++;
        }
    }
    return count;
}
function removeDoubles(){
    while(uniqueArray.length > 0){
           uniqueArray.pop();
       }
    console.log(uniqueArray);
    for(i=0; i < diceArray.length; i++){
        if (diceArray[i] != diceArray[i+1]){
            uniqueArray.push(diceArray[i]);
        }
    }
}
function checkStraight(){
    for(i = 0; i < uniqueArray.length; i++){
        if(uniqueArray[i] == (uniqueArray[i+1]-1)) {
            if(uniqueArray[i+1] == (uniqueArray[i+2]-1)){
                if(uniqueArray[i+2] == (uniqueArray[i+3]-1)){
                    if(uniqueArray[i+3] == (uniqueArray[i+4]-1)){
                        return 5;
                    }
                } else {
                    return 4;
                }
            } else {
                return 1;
            } 
        } else {
            return 1;
        }
    }
}
function turnCounter(){
    turnCount++;
    console.log(turnCount);
    if(turnCount >= 13){
        alert("Game Complete.  Your final score is: "+total+" points");
        location.reload();
    }
}

//Roll Button
document.getElementById("roll").addEventListener("click",function(){
    if(rollNum >= 3){
        alert("You are out of rolls.  Please select a catagory for your score");
    }
    if(rollNum < 3) {
        if(h1 == false){
            var timer1 = setInterval(function(){
                diceVal1 = Math.floor((Math.random()*6)+1);
                dice1.style.backgroundImage = "url("+diceVal1+".png)";
            }, 125)
            setTimeout(function(){
                clearInterval(timer1)
            }, 1000)  
        }
        if(h2 == false){
            var timer2 = setInterval(function(){
                diceVal2 = Math.floor((Math.random()*6)+1);
                dice2.style.backgroundImage = "url("+diceVal2+".png)";
            }, 125)
            setTimeout(function(){
                clearInterval(timer2)
            }, 1000) 
        }
        if(h3 == false){
            var timer3 = setInterval(function(){
                diceVal3 = Math.floor((Math.random()*6)+1);
                dice3.style.backgroundImage = "url("+diceVal3+".png)";
            }, 125)
            setTimeout(function(){
                clearInterval(timer3)
            }, 1000) 
        }
        if(h4 == false){
            var timer4 = setInterval(function(){
                diceVal4 = Math.floor((Math.random()*6)+1);
                dice4.style.backgroundImage = "url("+diceVal4+".png)";
            }, 125)
            setTimeout(function(){
                clearInterval(timer4)
            }, 1000) 
        }
        if(h5 == false){
            var timer5 = setInterval(function(){
                diceVal5 = Math.floor((Math.random()*6)+1);
                dice5.style.backgroundImage = "url("+diceVal5+".png)";
            }, 125)
            setTimeout(function(){
                clearInterval(timer5)
            }, 1000) 
        }
        rollNum++
        document.getElementById("rollNumber").innerHTML = "Roll:"+rollNum; 
    }
});
//Hold Buttons
document.getElementById("hold1").addEventListener("click", function(){
    if(rollNum != 0){
        if(h1 == false){
            h1 = true;
            this.style.backgroundColor = "#696969";
            this.style.color = "#FFFFFF";
        } else {
            h1 = false;
            this.style.backgroundColor = "#e1e1e1";
            this.style.color = "#000000";
        }
    }
});
document.getElementById("hold2").addEventListener("click", function(){
    if(rollNum != 0){
       if(h2 == false){
            h2 = true;
            this.style.backgroundColor = "#696969";
            this.style.color = "#FFFFFF";
       } else {
            h2 = false;
            this.style.backgroundColor = "#e1e1e1";
            this.style.color = "#000000";
        }
    }
});
document.getElementById("hold3").addEventListener("click", function(){
   if(rollNum != 0){
        if(h3 == false){
            h3 = true;
            this.style.backgroundColor = "#696969";
            this.style.color = "#FFFFFF";
        } else {
            h3 = false;
            this.style.backgroundColor = "#e1e1e1";
            this.style.color = "#000000";
        }
    }
});
document.getElementById("hold4").addEventListener("click", function(){
   if(rollNum != 0){
        if(h4 == false){
            h4 = true;
            this.style.backgroundColor = "#696969";
            this.style.color = "#FFFFFF";
        } else {
            h4 = false;
            this.style.backgroundColor = "#e1e1e1";
            this.style.color = "#000000";
        }
    } 
});
document.getElementById("hold5").addEventListener("click", function(){
   if(rollNum != 0){
        if(h5 == false){
            h5 = true;
            this.style.backgroundColor = "#696969";
            this.style.color = "#FFFFFF";
        } else {
            h5 = false;
            this.style.backgroundColor = "#e1e1e1";
            this.style.color = "#000000";
        }
    }
});
//Upper Score Buttons
document.getElementById("1s").addEventListener("click", function(){
    if(rollNum != 0){
        countUpper(1, "1score")
        rollNum = 0;
        turnCounter();
    }
});
document.getElementById("2s").addEventListener("click", function(){
    if(rollNum != 0){
        countUpper(2, "2score")
        rollNum = 0;
        turnCounter();
    }
});
document.getElementById("3s").addEventListener("click", function(){
    if(rollNum != 0){
        countUpper(3, "3score")
        rollNum = 0;
        turnCounter();
    }
});
document.getElementById("4s").addEventListener("click", function(){
    if(rollNum != 0){
        countUpper(4, "4score")
        rollNum = 0;
        turnCounter();
    }
});
document.getElementById("5s").addEventListener("click", function(){
    if(rollNum != 0){
        countUpper(5, "5score")
        rollNum = 0;
        turnCounter();
    }
});
document.getElementById("6s").addEventListener("click", function(){
    if(rollNum != 0){
        countUpper(6, "6score")
        rollNum = 0;
        turnCounter();
    }
});
//Lower Score Buttons
document.getElementById("trips").addEventListener("click", function(){
    if(rollNum != 0){
        makeArray();
        var counter = 0;
        for(i = 1; i <= 6; i++){
            if(count(i) > counter){
                counter = count(i);
            }
        }
        if(counter >= 3){
            var sum = diceVal1 + diceVal2 + diceVal3 + diceVal4 + diceVal5;
            total = total + sum;  
            document.getElementById("tripsbox").innerHTML = sum;
            document.getElementById("totalscore").innerHTML = total;
            deHold();
        }
        else{
            document.getElementById("tripsbox").innerHTML = 0;
            deHold();
        }
        turnCounter();
    }
});
document.getElementById("quads").addEventListener("click", function(){
    if(rollNum != 0){
        makeArray();
        var counter = 0;
        for(i = 1; i <= 6; i++){
            if(count(i) > counter){
                counter = count(i);
            }
        }
        if(counter >= 4){
            var sum = diceVal1 + diceVal2 + diceVal3 + diceVal4 + diceVal5;
            total = total + sum;  
            document.getElementById("quadsbox").innerHTML = sum;
            document.getElementById("totalscore").innerHTML = total;
            deHold();
        }
        else{
            document.getElementById("quadsbox").innerHTML = 0;
            deHold();
        }
        turnCounter();
    }
});
document.getElementById("fullhouse").addEventListener("click", function(){
    if(rollNum != 0){
        makeArray();
        var check2 = false;
        var check3 = false;
        for(i = 1; i <= 6; i++){
            if(count(i) == 3){
                check3 = true;
            }
            if(count(i) == 2){
                check2 = true;
            }
        }
        if(check2 == true && check3 == true){
            total = total + 25;  
            document.getElementById("fullhousebox").innerHTML = 25;
            document.getElementById("totalscore").innerHTML = total;
            deHold();
        }
        else{
            document.getElementById("fullhousebox").innerHTML = 0;
            deHold();
        }
        turnCounter();
    }
});
document.getElementById("sstraight").addEventListener("click", function(){
   if(rollNum != 0){
       makeArray();
       removeDoubles();
       if (checkStraight() > 3){
           total = total + 30;
           document.getElementById("sstraightbox").innerHTML = 30;
           document.getElementById("totalscore").innerHTML = total;
           deHold();
       } else{
           document.getElementById("sstraightbox").innerHTML = 0;
           deHold();
       }
       turnCounter();
   } 
});
document.getElementById("lstraight").addEventListener("click", function(){
   if(rollNum != 0){
       makeArray();
       removeDoubles();
       if (checkStraight() > 4){
           total = total + 40;
           document.getElementById("lstraightbox").innerHTML = 40;
           document.getElementById("totalscore").innerHTML = total;
           deHold();
        }
        else{
            document.getElementById("lstraightbox").innerHTML = 0;
            deHold();
        }
       turnCounter();
   } 
});
document.getElementById("yahtzee").addEventListener("click", function(){
    if (rollNum != 0){
        if (diceVal1 == diceVal2 && diceVal1 == diceVal3 && diceVal1 == diceVal4 && diceVal1 == diceVal5){
            total = total + 50;  
            yahttotal = yahttotal + 50;
            document.getElementById("yahtbox").innerHTML = 50;
        }
        document.getElementById("yahtbox").innerHTML = yahttotal;
        document.getElementById("totalscore").innerHTML = total;
        deHold();
    }
    turnCounter();
});
document.getElementById("chance").addEventListener("click", function(){
    if (rollNum != 0){
        var sum = diceVal1 + diceVal2 + diceVal3 + diceVal4 + diceVal5;
        total = total + sum;  
        document.getElementById("chancebox").innerHTML = sum;
        document.getElementById("totalscore").innerHTML = total;
        deHold();
        turnCounter();
    }
});
document.getElementById("bonus").addEventListener("click", function(){
    if (rollNum != 0){
        if (diceVal1 == diceVal2 && diceVal1 == diceVal3 && diceVal1 == diceVal4 && diceVal1 == diceVal5){
            if(yahttotal != 0){
                total = total + 100;
                yahttotal = yahttotal + 100;
                document.getElementById("yahtbox").innerHTML = yahttotal;
                deHold();
            } else {
                alert("Please score the yahtzee box before scoring any bonuses")
            }
        } 
    }
});