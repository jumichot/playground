var goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
];

// `checkUsersValid` is the function you'll define
var testAllValid = checkUsersValid(goodUsers);

testAllValid([
  { id: 2 },
  { id: 1 }
]);
// => true

testAllValid([
  { id: 2 },
  { id: 4 },
  { id: 1 }
]);
// => false

function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(element, index, array) {
      return goodUsers.some(function(elem, i, ary) {
        return element.id == elem.id;
      });
    });
  };
}

module.exports = checkUsersValid;
