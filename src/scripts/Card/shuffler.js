"use strict";

class Shuffler {

  shuffle(deckOfCards) {
    let shuffleCount = this.getOptimumShufflesCount(deckOfCards);
    for (let i = 0; i < shuffleCount; i++) {
      this._shuffle(deckOfCards);
    }
  }

  getOptimumShufflesCount(deck) {
    let numberOfCardsInSingleDeck = 52;
    let optimumShuffleCountPer52CardDeck = 7;
    return (deck.length / numberOfCardsInSingleDeck) * optimumShuffleCountPer52CardDeck;
  }

  _shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue = null;
    let randomIndex;
    for (let i = 0; i < currentIndex; currentIndex--) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  }
}