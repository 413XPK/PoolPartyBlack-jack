



/*
build deck of cards variables: suits, values
var deck = new Array();

function of createDeck(), inside that function
include a loop that goes through each of the suits (and inside this loop), create one for values.
    +the weight for "J, Q, K" =10
    +weight for "A" = 11
    ++variable for card array = value[i], suit[i], weight for 

function shuffle deck
FOR less than 1000 rounds (increasing the round one by one)
    +(shuffle from location 1 to location 2)
    +create two variables for location 1 and location to (to be random locations)
    +create variable for final location called temp
    +run for deck[location1] = deck[location2];
    +run for deck[location2] = temp

create var for players = new Array();
for function createPlayers(num)
    call players for new Array();
    +for each player increasing by 1
        hand variable is new Array();
        for variable (singular) player equal to array = name, ID, points, hand.
        push player into players

start game of Black Jack
    restart button
    display of game

    run functions:
    createDeck();
    shuffle,
    createplayers,
    createplayersUI,
    deal hands

    whos active

deal the hand function 
    //2 cards each
    
    for (i=0, less than 2, each increasing amount)
        for each player varable x, less than players.length, each increasing amount
            variable for card = deck.pop
            players[x].hand.push(card)
            rendercard(card, x)
            update points function
    
update deck function

update points
    for (starting at 0, less than players.length, each increasing amount)
        getPoints index
        getElementById ('points' + i).innerHTML = players[i].points

update deck 
    deck count innerHTML = deck.length

renderCard function(card, player)
    hand variable = "hand" + player

getUICard(card)
    el variable = create div
    el.className = 'card' 
    el.innerHTML =card.suit + card.value
    return el

hitMe function
    var card = deck.pop
    push card for the hand of currentplayer of players
    renderCard(card, currentPlayer)
    update points
    run check

check function
    if currentPlayer of players points is greater than 21
        'status'.innerHTML = 'player' +current player ID + 'lost'

stay function
    (move to next player if any)
    if current player is not last player
        remove classList active
        currentPlayer += 1
        add active current players
    else end()

end function
    winner variable
    score variable
        for (starting at 0, less than players length, each increasing amount)
            if players[i] points is greater than score && players[i] points less than 22
                then winner = i
            score = players[i] points
    status innerHTML = 'winner player' + players winner ID



*/

