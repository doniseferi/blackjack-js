"use strict";

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