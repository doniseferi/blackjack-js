"use strict";

class SummaryUpdater {
    constructor(elementFactory) {
        this.elementFactory = elementFactory;
    }

    update(players, elementId) {

        let htmlElement = this.initalizeElement(elementId);

        players.forEach(player => {

            let button = this.createPlayerButton(player);
            let playerText = this.generateTextNode(players, player);
            let playerDiv = this.elementFactory.create("div");

            playerDiv.appendChild(playerText);
            playerDiv.appendChild(button);
            htmlElement.appendChild(playerDiv);
        });
    }

    initalizeElement(elementId) {

        let htmlElement = document.getElementById(elementId)

        htmlElement.innerHTML = "";
        htmlElement.setAttribute("class", "summary");

        return htmlElement;
    }

    createPlayerButton(player) {

        if (player.constructor.name == 'Dealer') {
            return this.elementFactory.create("a");
        }

        let text = player.getHit() ? "Hit Me" : "Stay";
        let anchor = this.elementFactory.create("a", text);

        anchor.setAttribute("class", "hitMeButton");

        return anchor;
    }

    generateTextNode(players, player) {

        let text = `${player.constructor.name} #${players.indexOf(player) + 1} has ${player.getScore()}`;
        let textTag = this.elementFactory.create("text", text);

        return textTag;
    }
}