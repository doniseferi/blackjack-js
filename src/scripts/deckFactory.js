"use strict";

class DeckFactory {

    create(deckCount) {
        
        let deck = [];

        for (let i = 0; i < count; i++) {
            deck += this.create();
        }

        return deck;
    }

    createDeck() {
        var deck = [];
        for (let rank = 0; rank < 13; rank++) {
            for (let suit = 0; suit < 4; suit++) {
                let card = new Card(suit, rank);
                deck.push(card);
            }
        }
        return deck;
    }
}