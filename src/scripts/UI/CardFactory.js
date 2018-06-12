"use strict";

class CardFactory {

    constructor(elementFactory) {
        this.elementFactory = elementFactory;
    }

    create(cards) {

        let div = this.elementFactory.create("div");

        div.setAttribute("class", "hand");

        cards.forEach(card => {
            let cardDiv = this.createCardDiv(card);
            div.appendChild(cardDiv)
        });

        return div;
    }

    createCardDiv(card) {

        var div = this.elementFactory.create("div");

        div.setAttribute("class", `card suit${card.suit.value.toLowerCase()}`);

        var p = this.elementFactory.create("p", card.rank.value);

        div.appendChild(p);

        return div;
    }
}