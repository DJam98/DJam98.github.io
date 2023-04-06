var fruit1 = "banana";
var fruit2 = "pineapple";
var fruit3 = "apple";
var fruit4 = "peach";
var fruit5 = "orange";

var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"];

var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"];

console.log(fruitArray);

fruitArray[1] = 'tomato';

fruitArray[5] = 'pear';

console.log(fruitArray);

console.log(fruitArray.concat(mixedArray));

for (let fruit of fruitArray){
        
    if(fruit === 'tomato'){
        console.log("but am I a fruit")
    } else {
        console.log(fruit)
    }
}