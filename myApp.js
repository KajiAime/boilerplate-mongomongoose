require('dotenv').config();
const mongoose = require('mongoose');

const myURI = process.env.MONGO_URI;
mongoose.connect(myURI, {useNewUrlParser: true, useUnifiedTopology: true});

let Person;

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  let doc =  new Person({
    name: "Kaji",
    age: 20,
    favoriteFoods: ["Eru", "Koki", "Fufu"]
  });
  doc.save(function(error, data) {
    if(error) return console.error(error);
    done(null , data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(error, people) {
    if (error) return console.error(error);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(error, people) {
    if (error) return console.error(error)
    done(null ,people);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: [food]}, function(error, person) {
    if (error) return console.error(error)
    done(null, person);
  });
};

const findPersonById = (personId, done) => {
  Person.findById({_id:personId}, function(error, person) {
    if (error) return console.error(error)
    done(null, person);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, function(error, person) {
    if (error) return console.error(error)
    person.favoriteFoods.push(foodToAdd);
    person.save(function(err, data) {
      if (err) return console.error(err)
      done(null, data);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
