"use strict";

class CalulateHitStrategyFactory {

    create() {
        return new CalulateHitStrategy([new HitDealer(), new HitPlayer()]);
    }
}