// let food = ["burger", "kabsa", "spaghetti", "pizza"];


// names[0] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));

// //...
// var storedNames = JSON.parse(localStorage.getItem("names"));


let cars{
    keys
    
}

//////////////////////////////////////////////////////

class Dog{
    constructor(name,species,age){
        this.name=name
        this.species=species
        this.age=age
    }
    makeSound(){
        return this.name + "  "+ 'says woof!'
    }
}
const dog1= new Dog("Spike", "dobberman", 5)
console.log(dog1.makeSound());

//////////////////////////////////////////////



// axios({
//     method:"get",
//     url:"https://jsonplaceholder.typicode.com/todos/1"
    
// })
// .then((res)=>{
//     console.log(res.data.title);
// })
// .catch((err)=>{
//     console.log(err);
// })