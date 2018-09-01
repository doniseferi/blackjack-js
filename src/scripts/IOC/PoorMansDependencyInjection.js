"use strict";

class PoorMansDependencyInjection {
    createUiScriptObjectGraph() {
        let blackJackFactory = new BlackJackFactory();
        let blackJack = blackJackFactory.create();

        let elementFactory = new ElementFactory();
        let uiCardFactory = new UiCardFactory(elementFactory);

        let tableUpdater = new TableUpdater(uiCardFactory, elementFactory);

        let playerFactory = new PlayerFactory(elementFactory);
        let summaryUpdater = new SummaryUpdater(elementFactory, playerFactory);

        return new UiScript(blackJack, tableUpdater, summaryUpdater);
    }
}