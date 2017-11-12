describe('Person', function(){
  var person;
  beforeEach(function() {
    person = new Person({
      gender: 'female',
      age: 30,
      distance: 1500
  });
  });

  it('should have a gender', function() {
    expect(person.gender).toBe('female');
  });

  it('should have age', function() {
    expect(person.age).toBe(30);
  });

  it("person should have a noted distance", function()  {
  expect(person.distance).toEqual(1500);
  });

});
