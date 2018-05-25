"use strict";

class PointsCalcualtor {

    getHighestValidCard(players) {
        let points = this.getSumOfPoints(players)
            .sort(function orderByDescending(a, b) {
                return a - b;
            });

        return Math.max.apply(Math, points.filter(function (score) {
            return score <= blackJack;
        }));
    }

    getSumOfPoints(players) {

        let points = [];

        players.forEach(player => points.push(player.getScore()));

        return points;
    }
}