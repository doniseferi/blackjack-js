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
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}