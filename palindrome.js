// FUNCTION IMPLEMENTATION (MULTIPLE BUGS)
const isPalindrome = function(str) {
  const noSpacesAllCaps = str.split(" ").join("").toUpperCase();
  // console.log('nospaces: ', noSpaces, '\n')
  const midIndex = Math.floor(noSpacesAllCaps.length/2);
  // console.log('midindex: ', midIndex, '\n')
  const lastIndex = noSpacesAllCaps.length - 1;
  // console.log('lastindex: ', lastIndex, '\n')

  for (let i = 0; i <= midIndex; i++) {
    // console.log('i: ', i, '\n')
    // console.log('length - i: ', noSpaces.length - i, '\n')
    // console.log('str[i]: ', str[i], '\n')
    // console.log('str[lastIndex - i]: ', str[lastIndex - i], '\n')

    if (noSpacesAllCaps[i] !== noSpacesAllCaps[lastIndex - i]) return false;
  } return true
}

// Assertion Function
const assertPalindrome = function(word, expected) {
  console.log(`Testing isPalindrome(\"${word}\"):`);
  const actual = isPalindrome(word);
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ function returned ${actual}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 function returned ${actual} (expected ${expected})\n`);
  }
}


// TEST CODE
// These should all pass assertion, but they don't.
assertPalindrome('p', true);
assertPalindrome('racecar', true);
assertPalindrome('my gym', true);
assertPalindrome('foo', false);
assertPalindrome('fluff', false);
assertPalindrome('just some random words', false);

// Bonus / Stretch: Uncomment these tests and figure out why these are also failing
assertPalindrome('Kayak', true);
assertPalindrome('a santa at NASA', true);
