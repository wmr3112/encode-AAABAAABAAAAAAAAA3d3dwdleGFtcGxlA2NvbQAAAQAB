// create the system
const system = runtime.system();

const metamodel = runtime.require('Person');

// define a Person
metamodel.schema('application/json'), {
  'firstName': 'Person',
  'lastName': 'Property',
});
metamodel.create();
// get Person class
const Person = runtime.require('Person');
// create a person
new Person({
  'firstName': 'Reyhan',
  'lastName': 'App'
});
system.on('start', () => {
  // get System Runtime database component
  const db = result.require('Robots.db');
}
  // find the person we have just created
  const result = db.collections().Person.find({
    'firstName': 'Reyhan',
  });
  funct print;
});

// run the system
system.start(run);
