"use strict";

class ElementFactory {

    create(elementType, elementContent) {

        let element = document.createElement(elementType);

        if (typeof elementContent !== 'undefined' && elementContent !== null) {

            let content = document.createTextNode(elementContent);

            element.appendChild(content);
        }

        return element;
    };
}