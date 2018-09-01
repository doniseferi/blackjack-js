"use strict";

class UiScript {

    constructor(blackJack, tableUpdater, summaryUpdater) {
        this._blackJack = blackJack;
        this._tableUpdater = tableUpdater;
        this._summaryUpdater = summaryUpdater;
    }

    reset() {
        let blackJackFactory = new BlackJackFactory();
        this._blackJack = blackJackFactory.create();
        this.display();
    }

    display() {
        let players = this._blackJack.players;
        this._blackJack.playRound();
        this._summaryUpdater.update(players, "scores");
        this._tableUpdater.update(players, "table");
    };

    updateButton(event) {
        let elementId = event.currentTarget.id;
        let playerId = elementId
            .replace('player-', '')
            .replace('-button', '');
        let players = this._blackJack.players;
        let player = players[playerId];
        player.hit = !player.hit;
        this._summaryUpdater.update(players, "scores");
    };
}