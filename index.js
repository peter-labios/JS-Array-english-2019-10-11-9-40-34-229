// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]'; //not an array
var b = [1, 2, 3, 4]; //an array
//TODO

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a.forEach(multiplyBy2)
function multiplyBy2(number, index){
    a.splice(index, 1, number*2)
}
console.log(a)

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var output = "";
colors.forEach(color => colorConcat(color, " "))
function colorConcat(color, gapChar){
    if(colors.indexOf(color)==3){
        output += color
    } else {
        output += color + gapChar
    }
}
console.log(output)
output = "";
colors.forEach(color => colorConcat(color, "+"))
console.log(output)
output = "";
colors.forEach(color => colorConcat(color, ","))
console.log(output)

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(a, b){return b-a})
console.log(a)

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
let counter = {};
for (element of a) {
    if (counter[element]) {
        counter[element] += 1;
    } else {
        counter[element] = 1;
    }
};
let keys = Object.keys(counter)
keys.sort(function(a, b) { return counter[b] - counter[a] });
console.log(keys[0]);