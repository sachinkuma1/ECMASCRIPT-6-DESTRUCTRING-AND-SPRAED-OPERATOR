const array=[
    {name:"sachin", age:20}, 
    {name:"saurabh", age:22}, 
    {name:"prasad", age:23}, 
    {name:"suraj", age:30} 
    
]

const [{name}, , ...rest]=array;
console.log(name, rest);
