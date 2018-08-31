"use strict";

class ElementFactory {

    //es6 feature: default parameter values
    create(elementType, elementTextContent = null) {

        let element = document.createElement(elementType);

        if (elementTextContent) {

            let content = document.createTextNode(elementTextContent);

            element.appendChild(content);
        }

        return element;
    };
}