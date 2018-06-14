"use strict";

class ElementFactory {

    //es6 feature: default parameter values
    create(elementType, elementContent = null) {

        let element = document.createElement(elementType);

        if (elementContent !== null) {

            let content = document.createTextNode(elementContent);

            element.appendChild(content);
        }

        return element;
    };
}