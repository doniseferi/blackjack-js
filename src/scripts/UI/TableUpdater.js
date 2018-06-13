"use strict";

class TableUpdater {

    constructor(cardFactory) {
        this.cardFactory = cardFactory;
    }

    update(players, elementId) {

        let htmlElement = document.getElementById(elementId)
        htmlElement.innerHTML = "";

        players.forEach(player => {

            let playersHandDiv = this.cardFactory.create(player.cards);

            playersHandDiv.setAttribute('id', `player-${players.indexOf(player)}-hand`);

            table.appendChild(playersHandDiv);
        });
    };
}