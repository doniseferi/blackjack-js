"use strict";

class BlackJack {

    constructor(dealer) {
        this.deckFactory = new DeckFactory();
        this.deck = this.deckFactory.create();
        this.shuffler = new Shuffler();
        this.shuffler.shuffle(this.deck);
        this.gameOver = false;
    };

    deal() {
    }

    hit() {
        return this.deck.pop();
    };

    stay() {};
}
