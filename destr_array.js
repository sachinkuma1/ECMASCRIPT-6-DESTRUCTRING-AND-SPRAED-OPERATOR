const arr=['mango ', 'apple', 'banana', 'mosambi'];
const[fruit1, fruit2]=arr;
// console.log(fruit1, fruit2); it will print mango and apple 
// suppose we have to skip the second fruit then how can we do 
const [fruitx, , fruity, ...rest]=arr;
console.log(fruitx, fruity, rest);
// if we have to skip something then we just give empty comma like this [x, , y]


