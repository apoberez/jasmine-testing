describe("Investment", function () {
    "use strict";
    var stock, investment, shares;

    beforeEach(function () {
        stock = new Stock();
        shares = 100;
        investment = new Investment({
            stock: stock,
            shares: shares,
            sharePrice: 20
        });
    });

    it('Should be of a stock', function () {
        expect(investment.stock).toBe(stock);
    });

    it("Should have the invested shares quantity", function () {
        expect(investment.shares).toBe(shares);
    });

    it("should have the share paid price", function () {
        expect(investment.sharePrice).toEqual(20);
    });
    it("should have a cost", function () {
        expect(investment.cost).toEqual(2000);
    });

    describe("when its stock share price valorizes", function () {
        beforeEach(function () {
            stock.sharePrice = 40;
        });

        it("should have positive roi", function () {
            expect(investment.roi()).toBe(1);
        });

        it("should be good", function () {
            expect(investment).toBeGoodInvestment();
        });
    });

    describe("when its stock share price delavorizes", function () {
        beforeEach(function () {
            stock.sharePrice = 0;
        });

        it("should have positive roi", function () {
            expect(investment.roi()).toBe(-1);
        });

        it("should be good", function () {
            expect(investment).not.toBeGoodInvestment();
        });
    });


});
