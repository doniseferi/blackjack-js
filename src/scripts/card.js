"use strict";

var ranks = [];
ranks.push({
    key: 0,
    value: "ACE"
},
{
    key: 1,
    value: "TWO"
},
{
    key: 2,
    value: "THREE"
},
{
    key: 3,
    value: "FOUR"
},
{
    key: 4,
    value: "FIVE"
},
{
    key: 5,
    value: "SIX"
},
{
    key: 6,
    value: "SEVEN"
},
{
    key: 7,
    value: "EIGHT"
},
{
    key: 8,
    value: "NINE"
},
{
    key: 9,
    value: "TEN"
},
{
    key: 10,
    value: "JACK"
},
{
    key: 11,
    value: "QUEEN"
},
{
    key: 12,
    value: "KING"
});

var suits = [];
suits.push({
    key: 0,
    value: "CLUBS"
},
{
    key: 1,
    value: "DIAMONDS" 
},
{
    key: 2,
    value: "HEARTS"
},
{
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
    }
}