describe('CooperTest', function() {
  describe('Test', function() {
    it("returns a result for a 30 y o female", function() {
      expect(CooperTest({
        age: 30,
        gender: "female",
        distance: 1500
      })).toEqual("Below Average");
    });
    it("returns a result for a 13 y o male", function() {
      expect(CooperTest({
        age: 13,
        gender: 'male',
        distance: 2500
      })).toEqual("Above Average");
    });
    it("returns a result for a 25 y o male", function() {
      expect(CooperTest({
        age: 25,
        gender: 'male',
        distance: 1500
      })).toEqual("Poor..");
    });
    it("returns a result for a 55 y o 'female'", function() {
      expect(CooperTest({
        age: 55,
        gender: 'female',
        distance: 2300
      })).toEqual("Excellent!");
    });
  });

});
