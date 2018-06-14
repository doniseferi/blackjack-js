"use strict";

class SummaryUpdater {
    constructor(elementFactory, playerFactory) {
        this.elementFactory = elementFactory;
        this.playerFactory = playerFactory;
    }

    update(players, elementId) {

        let htmlElement = this.initalizeElement(elementId);

        players.forEach(player => {

            let playerDiv = this.playerFactory.create(player, players);

            htmlElement.appendChild(playerDiv);
        });
    }

    initalizeElement(elementId) {

        let htmlElement = document.getElementById(elementId)

        htmlElement.innerHTML = "";
        htmlElement.setAttribute("class", "summary shadowBorder");

        return htmlElement;
    }
}