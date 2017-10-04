var tinyObject = { key: 'value'};

// console.log(tinyObject);

var myObject = {
  a: 6,
  b: 'abc',
  c: true,
  d: null,
};

var valueB = myObject["b"];

// console.log(myObject.b);

var mary = { name: 'Mary Sue'};
mary['name'] = 'Mary Jane';
mary['age'] = 22;
// console.log(mary);

var person = {
  name: 'Paul',
  address: {
    street: '310 W 95th',
    city: 'New York',
    zipCode: 10027
  }
};

// console.log(typeof(person['address']);
// console.log(person['address']['city'])

person['phoneNumbers'] = ['647', '905', '416'];


// console.log(typeof(person['phoneNumbers']));
// console.log(person['phoneNumbers'] instanceof Object) true
// console.log(person['phoneNumbers'] instanceof Array)  true
// console.log(person['phoneNumbers'] instanceof String) false

var spam = 'spam';
person['dislikes'] = {food: spam, 'email': 'spam'};

console.log(person.dislikes.food);



