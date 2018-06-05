"use strict";

class DeckFactory {

    create(deckCount) {

        let deck = [];

        deck = this.createDecks(deckCount);

        return deck;
    }

    createDecks(amount) {

        if (!amount) {
            amount = 1;
        }

        let deck = [];

        for (let i = 0; i < amount; i++) {

            deck.push(this.createDeck());
        }

        let ary = [].concat(...deck)

        return ary;
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