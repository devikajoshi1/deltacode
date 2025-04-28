let students = ["devika", "ronit","rajat"];
console.log(students);

//array method
//push
let cars = ["xuv","maruti","bmw"];
cars.push("toyota");
console.log(cars);

//pop
cars.pop();
console.log(cars);

//unshift
cars.unshift("audi");
console.log(cars);

//shift
cars.shift();
console.log(cars);

//indexOf
let colors = ["red","yellow","blue"];
console.log(colors.indexOf("yellow"));
console.log(colors.indexOf("green"));

//includes
console.log(colors.includes("blue"));

//concatenation
let primary = ["orange","green","violate"];
console.log(colors.concat(primary));

//reverse
console.log(colors.reverse());

//slice
console.log(colors.slice(1,3));

//splice
console.log(colors.splice(1,"pink","black"));
console.log(colors);


//sort
let days =["monday","sunday","wednesday","tuesday"];
console.log(days.sort());

//nested array
let arr =[[2,4],[3,6],[4,8]];
console.log(arr);