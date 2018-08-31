"use strict";

class DeckFactory {

    create(numberOfDecks) {

        let deck = [];

        return this.createDecks(numberOfDecks);
    }

    createDecks(numberOfDecks = 1) {

        let deck = [];

        for (let i = 0; i < numberOfDecks; i++) {

            deck.push(this.createA52CardDeck());
        }

        //es6 feature FLATTENS A MULTIDIMENSIONAL ARRAY
        let ary = [].concat(...deck)

        return ary;
    }

    createA52CardDeck() {

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