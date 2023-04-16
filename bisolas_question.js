const hobbies = ["Coding", "Anime", "Gaming"];

const person = {
  name: "Doe",
  birthYear: 2000,
  friends: ["Mia", "Zoe", "Eli", "Ian", "Kai"],
  test_method: function () {
    console.log("I am a method in person");
  },
};

class Person {
  name = "Doe";
  birthYear = 2000;
  friends = ["Mia", "Zoe", "Eli", "Ian", "Kai"];

  constructor() {}

  //method
  test_method() {
    console.log("I am a method in person");
  }
}

const getAge = function (birthYear) {
  return 2023 - birthYear;
};
const test_method = function () {
  console.log("I am a method in person");
};

console.log("typeof hobbies = " + typeof hobbies);
console.log("typeof person = " + typeof person);
console.log("typeof getAge = " + typeof getAge);
person.test_method(); //method
test_method(); //function
const personFromClass = new Person();
personFromClass.test_method();


console.log(0.1 + 0.2)

// You can force to be the same decimal places and then do your comparison
console.log((0.1 + 0.2).toFixed(1) === 0.3.toFixed(1));

// console.log(0.1 + 0.2 === 0.3);