"use strict";

class TableUpdater {

    constructor(cardFactory) {
        this.cardFactory = cardFactory;
    }

    update(players, elementId) {
        let htmlElement = document.getElementById(elementId)
        htmlElement.innerHTML = "";
        players.forEach(player => {
            table.appendChild(this.cardFactory.create(player.cards));
        });
    };
}