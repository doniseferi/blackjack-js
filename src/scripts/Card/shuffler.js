"use strict";

class Shuffler {

  shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue = null;
    var randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  }
}