// JSON LIKE SYNTAX

// Use Database
use mycustomers;

// Create User
db.createUsers({
  user: "Brad",
  pwd: "123456",
  roles: ["readWrite", "admin"]
});

// Create Collections
db.createCollection('customers');

// Insert Into Collections
db.customers.insert([{
  first_name: 'John',
  last_name: 'Doe',
  memberships: ["mem1", "mem2"],
  gender: "male",
  age: 34,
  address: {
    street: "4 Main St",
    city: "Waterloo"
  },
  balance: 123.5
},
{
  first_name: 'Tommy',
  last_name: 'Steven',
  memberships: ["mem2", "mem3"],
  gender: "male",
  age: 23,
  address: {
    street: "4 Main St",
    city: "Toronto"
  },
  balance: 25.3
},
{
  first_name: 'Brad',
  last_name: 'Traversy',
  memberships: ["mem1", "mem3"],
  gender: "male",
  age: 24,
  address: {
    street: "4 Main St",
    city: "Ottawa"
  },
  balance: 343.3
},
{
  first_name: 'Kelly',
  last_name: 'Johnson',
  memberships: ["mem2", "mem3"],
  gender: "female",
  age: 42,
  address: {
    street: "4 Main St",
    city: "Ottawa"
  },
  balance: 123.3
},
{
  first_name: 'Mary',
  last_name: 'Tompson',
  memberships: ["mem1", "mem3"],
  gender: "female",
  age: 22,
  address: {
    street: "4 Main St",
    city: "Ottawa"
  },
  balance: 3123
}
]);

db.customers.insert([
  { first_name: 'Brad', last_name: 'Traversy'},
  { first_name: 'Tommy', last_name: 'Steven'},
  { first_name: 'John', last_name: 'Smith'},
  { first_name: 'Kelly', last_name: 'Johnson'}
]);

// Update Data
db.customers.update({first_name: "John"}, {first_name: "John", last_name: "Doe", gender: "male"});
db.customers.update({first_name: "Tommy"}, {$set:{gender: "male"}});
db.customers.update({first_name: "Tommy"}, {$inc: {age: 5}});
db.customers.update({first_name: "Tommy"}, {$unset: {age: 1}});
db.customers.update({first_name: "Mary"}, {first_name: "Mary", last_name: "Tomson"}, {upsert: true});
db.customers.update({first_name: "Tommy"}, {$rename: {"gender" : "sex"}});

// Remove Data
db.customers.remove({});
db.customers.remove({first_name : "Mary"});
db.customers.remove({first_name : "Mary"}, {justOne : true});

// Find Data
db.customers.find({$or: [{first_name:"Kelly"},{first_name:"Mary"}]});
db.customers.find({gender: "female"});
db.customers.find({age : {$gt:30}});
db.customers.find({"address.city" : "Waterloo"});
db.customers.find({memberships: "mem1"});

db.customers.find().sort({last_name : 1}); //1 means ascending order : -1 means descending one
db.customers.find().count();
db.customers.find().limit(3);

// Function
db.customers.find().forEach(function(doc){print("Customer Name: " + doc.first_name)});
db.customers.find().forEach((doc) => {print("Customer Name: " + doc.first_name)});
