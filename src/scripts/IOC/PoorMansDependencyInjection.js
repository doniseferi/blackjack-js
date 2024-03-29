"use strict";

class PoorMansDependencyInjection {
    createUiScriptObjectGraph() {
        let blackJackFactory = new BlackJackFactory();

        let elementFactory = new UiElementFactory();
        let uiCardFactory = new UiCardFactory(elementFactory);

        let tableUpdater = new UiTableUpdater(uiCardFactory, elementFactory);

        let playerFactory = new UiPlayerFactory(elementFactory);
        let summaryUpdater = new UiSummaryUpdater(elementFactory, playerFactory);

        return new UiScript(blackJackFactory, tableUpdater, summaryUpdater);
    }
}