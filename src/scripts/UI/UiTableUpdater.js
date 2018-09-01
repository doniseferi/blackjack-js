"use strict";

class UiTableUpdater {

    constructor(uiCardFactory, elementFactory) {
        this.uiCardFactory = uiCardFactory;
        this.elementFactory = elementFactory;
    }

    update(players, elementId) {

        let htmlElement = document.getElementById(elementId)
        htmlElement.innerHTML = "";

        players.forEach(player => {

            let container = this.elementFactory.create("div");
            let header = this.getPlayersHeader(players, player);
            let playersHand = this.uiCardFactory.create(player.cards);

            container.setAttribute("class", "handContainer shadowBorder");
            container.appendChild(header);
            container.appendChild(playersHand);
            htmlElement.appendChild(container);
        });
    };

    getPlayersHeader(players, player) {
        let type = player.constructor.name;
        let number = (type !== "Dealer") ? players.indexOf(player) + 1 : "";
        return this.elementFactory.create("h1", `${type} ${number}`);
    }
}