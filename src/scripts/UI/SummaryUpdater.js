"use strict";

class SummaryUpdater {
    constructor(elementFactory) {
        this.elementFactory = elementFactory;
    }

    update(players, elementId) {

        let htmlElement = this.initalizeElement(elementId);

        players.forEach(player => {

            let playerDiv = this.createPlayerDiv(player, players);
            htmlElement.appendChild(playerDiv);
        });
    }

    initalizeElement(elementId) {

        let htmlElement = document.getElementById(elementId)

        htmlElement.innerHTML = "";
        htmlElement.setAttribute("class", "summary");

        return htmlElement;
    }


    createPlayerDiv(player, players) {

        let button = this.createPlayerButton(player, players);
        let playerText = this.generateTextNode(players, player);

        let playerDiv = this.elementFactory.create("div");
        playerDiv.appendChild(playerText);
        playerDiv.appendChild(button);

        return playerDiv;
    }

    createPlayerButton(player, players) {

        if (player.constructor.name == 'Dealer') {
            return this.elementFactory.create("a");
        }

        let text = player.getHit() ? "Hit Me" : "Stay";
        let anchor = this.elementFactory.create("a", text);

        anchor.setAttribute("class", "hitMeButton");
        let id = `player-${players.indexOf(player)}-button`;
        anchor.setAttribute("id", id);
        anchor.onclick = function (event) {
            updateButton(event);
        }

        return anchor;
    }

    generateTextNode(players, player) {

        let type = `${player.constructor.name}`;
        let number = (player.constructor.name == "Dealer") ? "" : `#${players.indexOf(player) + 1}`;
        let points = `${player.getScore()}`;
        let content = `${type} ${number} has ${points}`;

        let textTag = this.elementFactory.create("text", content);

        return textTag;
    }
}