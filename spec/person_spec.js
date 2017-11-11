describe('person', function(){
  beforeEach(function() {
    person = new Person({
      gender: 'Female',
      age: 30
    });
  });

  it('should have a gender', function() {
    expect(person.gender).toBe('Female');
  });

  it('should have age', function() {
    expect(person.age).toBe(30);
  });

});
