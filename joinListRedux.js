
const concatArray = function(array) {
  return array.join(', ');
};

const thingsLearned = ["gists", "types", "operators", "iteration", "problem solving"];
const  list = concatArray(thingsLearned);

console.log(`Today I learned about ${list}.`);
