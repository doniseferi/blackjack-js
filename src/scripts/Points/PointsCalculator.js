"use strict";

//TODO: Split this to player points calculator that is solely tasked with calculating the hand of a player
//and another method that gets highest valid card, gets points as below
//this has 2-3 responsibilities at the moment, get points for a deck of card, get the highest hand
//for a set of players
//and get all players points
//SRP breach, split this like a muthafuckin banana peel homie
class PointsCalculator {

    getHighestValidCard(players) {

        let points = this.getPoints(players)
            .sort(function orderByDescending(a, b) {
                return a - b;
            });

        return Math.max.apply(Math, points.filter(function (score) {
            return score <= blackJack;
        }));
    }

    getPoints(players) {

        let points = [];

        players.forEach(player => points.push(this.calculateHand(player.cards)));

        return points;
    }

    calculateHand(hand) {

        let points = [];

        hand.forEach(card => points.push(this.getPoint(card)));

        let total = points.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        let containsAce = points.includes(1);

        return (total <= 11 && containsAce) ? total += 10 : total;
    }

    getPoint(card) {
        return (card.rank.key < 10) ? card.rank.key + 1 : 10;
    }
}