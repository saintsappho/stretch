let loopyLighthouse = function(range, multiples, words){
  for (let num = range[0]; num <= range[1]; num++) {
    if ((num % multiples[0] === 0) && (num % multiples[1] === 0)) {
      console.log(words[0] + words[1]);
    } else if (num % multiples[0] === 0) {
      console.log(words[0]);
    } else if (num % multiples[1] === 0) {
      console.log(words[1]);
    } else { 
      console.log(num )
    } 
  } 
}
console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));


/*
 while (num === range) {
      if ((num % multiples[0] === 0) && (num % multiples[1] === 0)) {
        script.push(words[0] + words[1]);
      } else if (num % multiples[0] === 0) {
        script.push(words[0]);
      } else if (num % multiples[1] === 0) {
        script.push(words[1]);
      } else { script.push(num)
      } num++
    }
    */