class CardDivFactory {

    create(cards) {

        let div = this.createElement("div");

        div.className = "hand";

        cards.forEach(card => {
            let cardDiv = this.createCardDiv(card);
            div.appendChild(cardDiv)
        });

        return div;
    }

    createCardDiv(card) {

        var div = this.createElement("div");

        div.className = `card suit${card.suit.value.toLowerCase()}`;

        var p = this.createElement("p", card.rank.value);

        div.appendChild(p);

        return div;
    }


    createElement(elementType, elementContent) {

        let element = document.createElement(elementType);

        if (typeof elementContent !== 'undefined') {

            let content = document.createTextNode(elementContent);

            element.appendChild(content);
        }

        return element;
    }
}