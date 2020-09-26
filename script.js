//1.

var petArray = [ "cat", "cow", "dog"];

//2.

console.log(petArray[1]);

//3.

var petArray = [ "cat", "cow", "dog"];
petArray.push("sheep");

//4.

console.log(petArray.length);

for(var i=0; i<animals.length; i++){
      console.log(animals[i]);
      
//5.

var catObject = {
      name: "Misu",
      color: "white",
      age: 2
};
      
//6.

console.log(catObject.age);
      
//7.

var catArray = [
      {
      name: "Misu",
      color: "white",
      age: 2
}
];
      
//8.

for(var i = 0; i < catArray.length; i++){
      console.log(catArray[i].name); 
      console.log(catArray[i].color);
      console.log(catArray[i].age);
}

//9.

function logToConsole(theAnimal) {
console.log("This is a " + theAnimal);
}

//10.

logToConsole("donkey");