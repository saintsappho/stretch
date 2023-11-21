const without = function(input, removal) {
  let newArray = []
  for (let i = 0; i < input.length; i++) {
      if (!removal.includes(input[i])) {
          newArray.push(input[i]);
      }
  } return newArray;
};
const nameInverter = function(name) {
  if (name === undefined) {
    return "Error";
  }
  if (name === '') {
    return ''
  }
  let nameArr = (name.split(' '));
  if (nameArr.length === 0) {
    return "";
  }
  nameArr = without(nameArr, ' ')
  let nameOutput = [];
  for (let title of nameArr) {
    if (nameArr.length === 0) {
    return "";
    } 
    if (title === 'Mr.' || title === 'Mrs.' || title === 'Ms.' || title === 'Dr.') {
      if (nameArr.length === 1) {
        return "";
      }
      if (nameArr.length === 2) {
        return (`${nameArr[0]} ${nameArr[1]}`);
      }
      return (`${nameArr[0]} ${nameArr[2]}, ${nameArr[1]}`);
    } else if (nameArr.length === 1) {
      nameOutput.push(nameArr[0])
      return nameOutput.join();
    } else { 
        nameOutput.push(nameArr[1]);
        nameOutput.push(` ${nameArr[0]}`);
        return nameOutput.join();
    }
  }
};


