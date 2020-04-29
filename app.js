var dice1, dice2, player1, player2, activePlayer, roundTotal, total;


init();


document.querySelector('.btn-roll').addEventListener('click', function(){

    dice1 = Math.floor((Math.random()*6)+1);
    dice2 = Math.floor((Math.random()*6)+1);

    // console.log("dice 1 "+ dice1 + " dice 2 "+ dice2);

    document.getElementById("dice_1").src ='dice-'+dice1+'.jpg';
    document.getElementById("dice_2").src ='dice-'+dice2+'.jpg';

    var diceTotal = dice1 + dice2;
    console.log(total);

    if(dice1!== 1 && dice2!==1 ){
        roundTotal += diceTotal;
        console.log("not equal to one at all");
        document.getElementById('current-'+activePlayer).textContent = roundTotal;
    }
    else{
        nextPlayer();
    }
     
});

document.querySelector('.btn-hold').addEventListener('click', function(){

    console.log("hold");
    console.log(activePlayer +"roundTotal "+ roundTotal);
    total+=roundTotal;
    document.querySelector('#score-'+activePlayer).textContent= total;
    

    nextPlayer();
    
});

function nextPlayer(){

    activePlayer === 0? activePlayer=1: activePlayer=0;
    roundTotal = 0;
    document.getElementById('current-0').textContent =0;
    document.getElementById('current-1').textContent =0;

}


function init(){
    activePlayer = 0;
    roundTotal = 0;
    total=0;

    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;


}