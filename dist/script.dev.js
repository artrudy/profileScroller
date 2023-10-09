"use strict";

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(createPeopleIterator);

var people = [{
  name: "Jamie Williams",
  age: 26,
  gender: "female",
  location: "Los Angeles, CA",
  imageURL: "https://randomuser.me/api/portraits/women/1.jpg",
  looking: "Female looking for male"
}, {
  name: "John Smith",
  age: 35,
  gender: "male",
  location: "New York, NY",
  imageURL: "https://randomuser.me/api/portraits/men/1.jpg",
  looking: "Male looking for female"
}, {
  name: "Bob Johnson",
  age: 42,
  gender: "male",
  location: "Chicago, IL",
  imageURL: "https://randomuser.me/api/portraits/men/2.jpg",
  looking: "Male looking for male"
}, {
  name: "Shannon Jackson",
  age: 29,
  gender: "female",
  location: "Los Angeles, CA",
  imageURL: "https://randomuser.me/api/portraits/women/2.jpg",
  looking: "Female looking for female"
}];
var container = document.querySelector(".container");
console.log(container);
var img = document.querySelector("img");
var profileInfo = document.querySelector(".profile-info");
var nextBtn = document.querySelector("#next");

function createPeopleIterator() {
  var index;
  return regeneratorRuntime.wrap(function createPeopleIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          index = 0;

        case 1:
          if (!true) {
            _context.next = 6;
            break;
          }

          _context.next = 4;
          return people[index++ % people.length];

        case 4:
          _context.next = 1;
          break;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var iterator = createPeopleIterator();
nextBtn.addEventListener("click", function () {
  var person = iterator.next().value;
  img.src = person.imageURL;
  profileInfo.querySelector("h3").textContent = person.name;
  profileInfo.querySelectorAll("p")[0].textContent = "".concat(person.age, " Years Old");
  profileInfo.querySelectorAll("p")[1].textContent = "From ".concat(person.location);
  profileInfo.querySelectorAll("p")[2].textContent = person.looking;
});
nextBtn.click();