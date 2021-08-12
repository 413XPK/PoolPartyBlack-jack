


//build deck of cards variables: suits, values
let suits = ["Spades", "Hearts", "Clubs", "Diamonds" ]
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let deck = new Array();
let players = new Array();
let currentPlayer = 0;

var bet = 0;
var betInput = '';
var moneys = 100;
var moneyDisplay;
var broke;
var card;


//include a loop that goes through each of the suits and one for values
function createDeck(){
    deck = new Array();
    for(i=0; i<values.length; i++){
        for(x=0; x<suits.length; x++){
            let weight = parseInt(values[i]);
            if (values[i]=='J' || values[i] == "Q" || values[i] == "K"){ weight = 10;}
            if (values[i]=='A') {weight =11;}

            let card = {Value: values[i], Suit: suits[x], Weight: weight }
            deck.push(card);
        }
    }
}


function createPlayers(num){
    players = new Array();
    for (i=1; i<=num; i++){
        let hand = new Array();
        let player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand }
        players.push(player)

    }

    
}

// the 'i' means player number
function createPlayersUI(){
    document.getElementById('players').innerHTML = '';
    for(var i=0; i<players.length; i++){
        let div_player = document.createElement('div')
        let div_playerid = document.createElement('div');
        let div_hand = document.createElement('div');
        let div_points = document.createElement('div');

        div_points.className = 'points';
        div_points.id = 'points_' + i;
        div_player.id = 'player_' + i;
        div_player.className = 'player';
        div_hand.id = 'hand_' + i; 

        div_playerid.innerHTML = 'Player ' + players[i].ID;
        div_player.appendChild(div_playerid);
        div_player.appendChild(div_hand);
        div_player.appendChild(div_points);
        document.getElementById('players').appendChild(div_player);
    }
}


//FOR less than 1000 rounds (increasing the round one by one)
function shuffle(){
    for(i=0; i<1000; i++){
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let newDeck = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = newDeck;
    }
}


function betting(){
    moneyDisplay = document.getElementById('moneys');
        moneyDisplay.innerHTML = "$" + moneys;
        betInput = document.getElementById('bet');
        betInput.value = 10;

}


function showRules(){
    const targetDiv = document.getElementById('showingRules');
    const btn = document.getElementById('rules');
    btn.onclick = function(){
        if (targetDiv.style.display !== 'none'){
            targetDiv.style.display = 'none';
        } else {
            targetDiv.style.display='flex';
            
        }
    }
}

function unDisable(){
    document.getElementById('hit').disabled = false;
    document.getElementById('stay').disabled = false;
    document.getElementById('bettings').style.display='block';
    
}


//up till here is setup functions


function startBlackJack(){
    
    document.getElementById('btnStart').value = 'Continue';
    document.getElementById('status').style.display='none';
    currentPlayer= 0;
    createDeck();
    shuffle();
    createPlayers(2)
    createPlayersUI();
    dealHands();
    betting();
    unDisable();
    moneyCheck();

    document.getElementById('player_' + currentPlayer).classList.add('active');
    document.getElementById('hand_' + '1').classList.add('handInit');
    document.getElementById('btnStart').disabled = true;
    document.getElementById('points_' + '1').classList.add('initial');

    
}



function dealHands(){
    //2 cards each player 
    for (i=0; i<2; i++){
        for (x=0; x<players.length; x++){
            let card = deck.pop();
            players[x].Hand.push(card);
            renderCard(card, x);
            updatePoints();
        }
    }
    
}

function getPoints(player){
    var points = 0;
    for(var i = 0; i < players[player].Hand.length; i++){
        points += players[player].Hand[i].Weight;
    }
    players[player].Points = points;
    return points;
}

function updatePoints(){
    for (var i = 0 ; i < players.length; i++){
        getPoints(i);
        document.getElementById('points_' + i).innerHTML = players[i].Points;
    }
}

function renderCard(card, player){
    let hand = document.getElementById('hand_' + player);
    hand.appendChild(getCardUI(card));
}    

function getCardUI(card){
    var el = document.createElement('div');
    el.classList.add('card');
            
    if (card.Suit == 'Diamonds' && card.Value == 'A'){el.classList.add('dA')}
    if (card.Suit == 'Diamonds' && card.Value  == 'K'){el.classList.add('dK')}
    if (card.Suit == 'Diamonds' && card.Value == 'Q'){el.classList.add('dQ')}
    if (card.Suit == 'Diamonds' && card.Value == 'J'){el.classList.add('dJ')}
    if (card.Suit == 'Diamonds' && card.Value == '10'){el.classList.add('d10')}
    if (card.Suit == 'Diamonds' && card.Value == '9'){el.classList.add('d09')}
    if (card.Suit == 'Diamonds' && card.Value == '8'){el.classList.add('d08')}
    if (card.Suit == 'Diamonds' && card.Value == '7'){el.classList.add('d07')}
    if (card.Suit == 'Diamonds' && card.Value == '6'){el.classList.add('d06')}
    if (card.Suit == 'Diamonds' && card.Value == '5'){el.classList.add('d05')}
    if (card.Suit == 'Diamonds' && card.Value == '4'){el.classList.add('d04')}
    if (card.Suit == 'Diamonds' && card.Value == '3'){el.classList.add('d03')}
    if (card.Suit == 'Diamonds' && card.Value == '2'){el.classList.add('d02')}


    if (card.Suit == 'Hearts' && card.Value == 'A'){el.classList.add('hA')}
    if (card.Suit == 'Hearts' && card.Value == 'K'){el.classList.add('hK')}
    if (card.Suit == 'Hearts' && card.Value == 'Q'){el.classList.add('hQ')}
    if (card.Suit == 'Hearts' && card.Value == 'J'){el.classList.add('hJ')}
    if (card.Suit == 'Hearts' && card.Value == '10'){el.classList.add('h10')}
    if (card.Suit == 'Hearts' && card.Value == '9'){el.classList.add('h09')}
    if (card.Suit == 'Hearts' && card.Value == '8'){el.classList.add('h08')}
    if (card.Suit == 'Hearts' && card.Value == '7'){el.classList.add('h07')}
    if (card.Suit == 'Hearts' && card.Value == '6'){el.classList.add('h06')}
    if (card.Suit == 'Hearts' && card.Value == '5'){el.classList.add('h05')}
    if (card.Suit == 'Hearts' && card.Value == '4'){el.classList.add('h04')}
    if (card.Suit == 'Hearts' && card.Value == '3'){el.classList.add('h03')}
    if (card.Suit == 'Hearts' && card.Value == '2'){el.classList.add('h02')}

    if (card.Suit == 'Spades' && card.Value == 'A'){el.classList.add('sA')}
    if (card.Suit == 'Spades' && card.Value == 'K'){el.classList.add('sK')}
    if (card.Suit == 'Spades' && card.Value == 'Q'){el.classList.add('sQ')}
    if (card.Suit == 'Spades' && card.Value == 'J'){el.classList.add('sJ')}
    if (card.Suit == 'Spades' && card.Value == '10'){el.classList.add('s10')}
    if (card.Suit == 'Spades' && card.Value == '9'){el.classList.add('s09')}
    if (card.Suit == 'Spades' && card.Value == '8'){el.classList.add('s08')}
    if (card.Suit == 'Spades' && card.Value == '7'){el.classList.add('s07')}
    if (card.Suit == 'Spades' && card.Value == '6'){el.classList.add('s06')}
    if (card.Suit == 'Spades' && card.Value == '5'){el.classList.add('s05')}
    if (card.Suit == 'Spades' && card.Value == '4'){el.classList.add('s04')}
    if (card.Suit == 'Spades' && card.Value == '3'){el.classList.add('s03')}
    if (card.Suit == 'Spades' && card.Value == '2'){el.classList.add('s02')}

    if (card.Suit == 'Clubs' && card.Value == 'A'){el.classList.add('cA')}
    if (card.Suit == 'Clubs' && card.Value == 'K'){el.classList.add('cK')}
    if (card.Suit == 'Clubs' && card.Value == 'Q'){el.classList.add('cQ')}
    if (card.Suit == 'Clubs' && card.Value == 'J'){el.classList.add('cJ')}
    if (card.Suit == 'Clubs' && card.Value == '10'){el.classList.add('c10')}
    if (card.Suit == 'Clubs'&& card.Value == '9'){el.classList.add('c09')}
    if (card.Suit == 'Clubs' && card.Value == '8'){el.classList.add('c08')}
    if (card.Suit == 'Clubs' && card.Value == '7'){el.classList.add('c07')}
    if (card.Suit == 'Clubs' && card.Value == '6'){el.classList.add('c06')}
    if (card.Suit == 'Clubs' && card.Value == '5'){el.classList.add('c05')}
    if (card.Suit == 'Clubs' && card.Value == '4'){el.classList.add('c04')}
    if (card.Suit == 'Clubs' && card.Value == '3'){el.classList.add('c03')}
    if (card.Suit == 'Clubs' && card.Value == '2'){el.classList.add('c02')}

     return el;
}

function hitMe(){
     
    // hit and then check if current player new points are over 21
    let card = deck.pop();
    players[currentPlayer].Hand.push(card);
    renderCard(card, currentPlayer);
    updatePoints();
    check();

    if (players[currentPlayer].Hand.length === 5){
        document.getElementById('hit').disabled = true;
        currentPlayer += 1;
        document.getElementById('hit').disabled = false; 
    }
    if(currentPlayer===[1]){
        document.getElementById('hit').disabled = false; 
        //so end player can go back to hitting himself
    }
}


//check if score goes over 21
function check(){
     
    if (players[currentPlayer].Points>21){
        setTimeout(function lost(){document.getElementById('status').innerHTML = 'Player: ' + players[currentPlayer].ID + ' LOST';},2000);
        document.getElementById('status').style.display = 'inline-block';
        document.getElementById('hit').disabled = true; 
        document.getElementById('stay').disabled = true; 
        
        end();
    }
    

}

function stay(){
    // if any, move on to next player
    if (currentPlayer != players.length-1) {
        document.getElementById('player_' + currentPlayer).classList.remove('active');
        document.getElementById('hand_' + '1').classList.add('afterInit');
        currentPlayer += 1;
        document.getElementById('player_' + currentPlayer).classList.add('active');
        document.getElementById('points_' + currentPlayer).classList.add('active');
        document.getElementById('hand_' + '1').classList.remove('afterInit');
        document.getElementById('hand_' + '1').classList.remove('handInit');
        document.getElementById('points_' + '1').classList.remove('initial');
        document.getElementById('player_' + currentPlayer).classList.remove('active');
        document.getElementById('points_' + currentPlayer).classList.remove('active');

    }

    else {
        end();
    }
}



function end(){
    let winner= null;
    let score = null;


    for(var i = 0; i < players.length; i++){
        if (players[i].Points > score && players[i].Points < 22){
            winner = i
        }
    score = players[i].Points;
    
    }

        if(players[0].Points==players[1].Points){
            winner=1

            var newMoney = moneys - parseInt(betInput.value);
            document.getElementById("moneys").textContent=`${newMoney}`;
            moneys-= parseInt(betInput.value);
        }
        else if (winner===1 || players[0].Points>21){
            winner=1;
            var newMoney2 = moneys - parseInt(betInput.value);
            document.getElementById("moneys").textContent=`${newMoney2}`;
            moneys -= parseInt(betInput.value); 
        }
        else if (winner=== 0 || players[1].Points>21){
            winner=0;
            var newMoney3 = moneys + parseInt(betInput.value);
            document.getElementById("moneys").textContent=`${newMoney3}`;
            moneys+= parseInt(betInput.value);
        }   

     document.getElementById('status').innerHTML = 'Winner: Player ' + players[winner].ID;
     document.getElementById('status').style.display = 'inline-block';
     document.getElementById('btnStart').disabled = false;

    
}


function moneyCheck(){
    
    
    if(moneys ===0){
    
        document.getElementById('btnStart').disabled = true;
        document.getElementById('hit').disabled = true;
        document.getElementById('stay').disabled = true;
        document.getElementById('status').style.display='block';
        document.getElementById('reset').style.display = 'inline-block';
        setTimeout(function(){document.getElementById('status').innerHTML = 'no more money! see you again next time!';},2000);
        
    }
}

function reset(){
    window.location.reload();
}
