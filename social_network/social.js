const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function biggestFollower(data) {
  let podium = ''
  const ids = Object.keys(data)
  for (let i = 0; i < ids.length; i++){
    if (podium === ''){
      podium = i
    }
    if (data[ids[i]].follows.length > data[ids[podium]].follows.length){
      podium = i
    }
  }
  return data[ids[podium]]
}
console.log("biggestFollower: ", biggestFollower(data))

function mostPopular(data) {
  let followers = {}
  const ids = Object.keys(data)
  for (let i = 0; i < ids.length; i++){
    for (const follow of data[ids[i]].follows){
      if (followers[follow] === undefined){
        followers[follow] = 1
      } else {
        followers[follow] += 1
      }
    }
  }
  const maxFollowersCount = Math.max(...Object.values(followers));

  const mostFollowersIds = Object.keys(followers).filter((id) => followers[id] === maxFollowersCount);

  const mostPopularNames = mostFollowersIds.map((id) => data[id].name);
  return mostPopularNames;
}
console.log("mostPopular: ", mostPopular(data))

function printAll(data) {
  const all = {}
  const ids = Object.keys(data)
  for (let i = 0; i < ids.length; i++){
    let follows = []
    for (const follow of data[ids[i]].follows){
      follows.push(data[follow].name)
    }
    all[data[ids[i]].name] = {follows}
  }
  for (let i = 0; i < ids.length; i++){
    let followers = {}
    for (const id in data) {
      if (data[id].follows.includes(ids[i])) {
        followers[id] = data[id].name;
      }
    }
    all[data[ids[i]].name].followers = followers;
    
  }
  
  return all
}
console.log("printAll: ", printAll(data))

function unrequitedFollowers(data) {
  const unrequitedFollowersSet = new Set();
  const printed = printAll(data);
  const users = Object.keys(printed);

  for (const user of users) {
    const followers = Object.values(printed[user].followers);

    for (const follower of followers) {
      // Check if the user is not being followed back by the follower
      if (!printed[user].follows.includes(follower)) {
        unrequitedFollowersSet.add(follower);
      }
    }
  }
  const unrequitedFollowersArray = Array.from(unrequitedFollowersSet);
  return unrequitedFollowersArray;
}

console.log("unrequitedFollowers: ", unrequitedFollowers(data))