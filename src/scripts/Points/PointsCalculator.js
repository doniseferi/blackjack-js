"use strict";

class PointsCalcualtor {

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

        players.forEach(player => points.push(player.getScore()));

        return points;
    }

    getPoints(cards) {


    }
}