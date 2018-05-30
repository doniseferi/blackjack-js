"use strict";

class Shuffler {

  shuffle(deck) {
    let shuffleCount = this.getShuffleCount(deck);
    for (let i = 0; i < shuffleCount; i++) {
      this.shuffleDeck(deck);
    }
  }

  getShuffleCount(deck) {
    let singleDeckSize = 52;
    let optimumShuffleCount = 7;
    let shuffleCount = (deck.length / singleDeckSize) * optimumShuffleCount;
    return shuffleCount;
  }

  shuffleDeck(deck) {
    let currentIndex = deck.length;
    let temporaryValue = null;
    let randomIndex;
    for (let i = 0; i < currentIndex; currentIndex--) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = deck[currentIndex];
      deck[currentIndex] = deck[randomIndex];
      deck[randomIndex] = temporaryValue;
    }
  }
}