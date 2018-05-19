"use strict";

class BlackJack {

    constructor(dealer, deckFactory, shuffler) {
        this.dealer = dealer;
        this.deckFactory = deckFactory;
        this.shuffler = shuffler;
        this.deck = deckFactory.create();
        this.shuffler.shuffle(deck);
    };

    
}