"use strict";

class UiScript {

    constructor(numberOfPlayers = 2) {
        alert('ctor called');
        this.bj = new BlackJack(numberOfPlayers);
        let elementFactory = new ElementFactory();
        let cardFactory = new CardFactory(elementFactory);
        this.tableUpdater = new TableUpdater(cardFactory, elementFactory);
        let playerFactory = new PlayerFactory(elementFactory);
        this.summaryUpdater = new SummaryUpdater(elementFactory, playerFactory);
    }

    reset(numberOfPlayers = 2) {
        this.bj = new BlackJack(numberOfPlayers);
        this.display();
    }

    display() {
        let players = this.bj.players;
        this.bj.playRound();
        this.summaryUpdater.update(players, "scores");
        this.tableUpdater.update(players, "table");
    };

    updateButton(event) {
        let elementId = event.currentTarget.id;
        let playerId = elementId
            .replace('player-', '')
            .replace('-button', '');
        let players = this.bj.players;
        let player = players[playerId];
        player.hit = !player.hit;
        this.summaryUpdater.update(players, "scores");
    };
}