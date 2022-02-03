const arr = ["laptop", "notebook", "pen","medicine","bidet"]
// remove the last time
const pop = arr.pop();

console.log("After popping ",arr); //

arr.unshift(pop);

console.log("After unshifting ",arr)

arr.sort();

console.log("Sorted Array", arr);

arr.splice(1,1);

console.log("Spliced Item 1 ", arr)