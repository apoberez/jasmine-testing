beforeEach(function () {
    jasmine.addMatchers({
        toBeGoodInvestment: function () {
            "use strict";
            return {
                compare: function (actual, expected) {
                    var result = {};
                    result.pass = actual.isGood();

                    return result;
                }
            }
        }
    });
});