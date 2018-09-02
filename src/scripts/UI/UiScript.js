"use strict";

class UiScript {

    constructor(blackJackFactory, tableUpdater, summaryUpdater) {
        this._blackJackFactory = blackJackFactory;
        this._blackJack = blackJackFactory.create();
        this._tableUpdater = tableUpdater;
        this._summaryUpdater = summaryUpdater;
    }

    reset() {
        this._blackJack = this._blackJackFactory.create();
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