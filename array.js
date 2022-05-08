let friends = ["ema", "lija", "nur", "rabbi", "sami", "meve", "justin", "laura", "luci"];
var friendsAges = [12, 43, 53, 27, 24, 21];

console.log(friends);
friends[0] = "ema watson";
console.log(friends);

console.log(friendsAges);

friendsAges[1] = 20;
console.log(friendsAges);

friendsAges.push(11);
friendsAges.push(111);
console.log(friendsAges);
friendsAges.pop();
friendsAges.pop();
console.log(friendsAges);

friendsAges.unshift(991);
console.log(friendsAges);

friendsAges.shift();
console.log(friendsAges);

var friendsAges = [1,2,3,4,5,6,7,8,9,10];
var sliced = friendsAges.slice(5);
console.log(sliced);
console.log(friendsAges);