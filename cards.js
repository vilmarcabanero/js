// Initial variables
let suits = ['♣','♠','♡', '♢',];

//First function for letter cards
function specialCard(num) {

    if (num == 1) {
    	return 'A';
    } else if (num == 11){
    return 'J';
    } else if (num == 12){
    return 'Q';
    } else if (num == 13){
    return 'K';
    } else {
    return num;
    }
}

//Second Function for letter cards
function reverseSpecialCard(letter) {

    if (letter == "A"){
    return "1";
    } else if (letter == "J"){
    return "11";
    } else if (letter == "Q"){
    return "12";
    } else if (letter == "K"){
    return "13";
    } else {
    return letter;
    }
}


function createDeck(suits){
  let deck = []
  for(const suit of suits){
    for(let start = 1; start <= 13; start++){
      deck.push(suit + specialCard(start))
    }
  }
  return deck;
}  
 
let deck = createDeck(suits);
/* console.log(`Original Deck: ${deck}`) */
  
  
// Shuffle deck 

// Get random value within range
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)
