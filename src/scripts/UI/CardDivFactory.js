class CardDivFactory {

    create(cards) {
        let div = this.createElement("div")
        let p = this.createElement("p", "A");
        let classes = ["card", "suitdiamonds"];
        this.addClassesToElement(div, classes);
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

    addClassesToElement(element, classes) {
        classes.forEach(classe => {
            element.className += (" " + classe);
        });
    }
}