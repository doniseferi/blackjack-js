"use strict";

class UiPlayerFactory {

    constructor(elementFactory) {
        this.elementFactory = elementFactory;
    }

    create(player, players) {

        let button = this.createPlayerButton(player, players);
        let playerResult = this.playerSummary(players, player);

        let playerDiv = this.elementFactory.create("div");
        playerDiv.appendChild(playerResult);
        playerDiv.appendChild(button);

        return playerDiv;
    }

    createPlayerButton(player, players) {

        if (player.constructor.name == 'Dealer') {
            return this.elementFactory.create("a");
        }

        let anchor = this.elementFactory.create("a", player.hit ? "Hit Me" : "Stay");
        anchor.setAttribute("id", `player-${players.indexOf(player)}-button`);
        anchor.setAttribute("class", "hitMeButton");

        anchor.onclick = function (event) {
            updateButton(event);
        }

        return anchor;
    }

    playerSummary(players, player) {

        let type = `${player.constructor.name}`;
        let number = (player.constructor.name == "Dealer") ? "" : `#${players.indexOf(player) + 1}`;
        let points = `${player.score}`;
        let content = `${type} ${number} has ${points}`;

        let textTag = this.elementFactory.create("text", content);

        return textTag;
    }

}