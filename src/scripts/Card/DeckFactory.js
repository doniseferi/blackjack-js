"use strict";

class DeckFactory {

    create(deckCount) {
        
        let deck = [];

        deck = this.createDeck(deckCount);

        return deck;
    }

    createDeck(amount) {
       
        if (!amount) {
            amount = 1;
        }
        
        let decks = [];

        for (i = 0; i < amount; i++) {
            
            decks += this.createDeck();
        }

        return decks;
    }

    createDeck() {

        let deck = [];
        
        for (let rank = 0; rank < 13; rank++) {
            for (let suit = 0; suit < 4; suit++) {
                let card = new Card(suit, rank);
                deck.push(card);
            }
        }
        return deck;
    }
}