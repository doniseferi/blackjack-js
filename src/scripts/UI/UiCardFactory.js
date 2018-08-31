"use strict";

class UiCardFactory {

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

        let div = this.elementFactory.create("div");

        div.setAttribute("class", `card suit${card.suit.value.toLowerCase()}`);

        let p = this.elementFactory.create("p", card.rank.value);

        div.appendChild(p);

        return div;
    }
}