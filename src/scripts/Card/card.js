"use strict";

var ranks = [];
ranks.push({
    key: 0,
    value: "A"
}, {
    key: 1,
    value: "2"
}, {
    key: 2,
    value: "3"
}, {
    key: 3,
    value: "4"
}, {
    key: 4,
    value: "5"
}, {
    key: 5,
    value: "6"
}, {
    key: 6,
    value: "7"
}, {
    key: 7,
    value: "8"
}, {
    key: 8,
    value: "9"
}, {
    key: 9,
    value: "10"
}, {
    key: 10,
    value: "J"
}, {
    key: 11,
    value: "Q"
}, {
    key: 12,
    value: "K"
});

var suits = [];
suits.push({
    key: 0,
    value: "CLUBS"
}, {
    key: 1,
    value: "DIAMONDS"
}, {
    key: 2,
    value: "HEARTS"
}, {
    key: 3,
    value: "SPADES"
});

class Card {
    constructor(suit, rank) {
        this.suit = suits[suit];
        this.rank = ranks[rank];
    }

    toString() {
        return this.rank.value + " of " + this.suit.value;
    }

    getPoint() {
        return (this.rank.key < 10) ? this.rank.key + 1 : 10;
        /* needs to be updated to:
        pointsCalculator.getPoint(this); */
    }
}