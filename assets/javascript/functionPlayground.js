let counter = 0;

while (counter < 10) {
  console.log(counter);
  counter++;
}

// *Important* - recursion
function loop(counter) {
  if (counter >= 10) return;
  console.log(counter);
  loop(counter + 1);
}
loop(0);

function walkTree(node) {
  if (node == null) return;
  for (let i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]); //?
  }
}

function objectCreator(param) {
  return {
    key: param
  };
}

objectCreator(7); //?

// Closure
// The outer function defines 'name'
const pet = function(name) {
  // This inner function is declared with no param, but it has access to the param in the outer function
  const getName = function() {
    return name;
  };
  return getName(); // Return the inner function, therby exposing it to the outer scopes
};

myPet = pet("Buddy");
myPet; //?
