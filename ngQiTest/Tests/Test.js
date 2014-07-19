/// <reference path="../Scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../ngqi/app.ts" />
describe("ngQi", function () {
    it("DummyTest", function () {
        // Fixture setup
        var sut = 1;

        // Exercise system
        var expectedNumber = sut;

        // Verify outcome
        expect(1).toBe(expectedNumber);
        // Teardown
    });
});
