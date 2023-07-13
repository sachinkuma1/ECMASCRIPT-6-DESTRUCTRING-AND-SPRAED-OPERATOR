function sum(x, y, z){
    return x+y+z;
}
const arr=[1, 2, 3, 4, 5];
let add=sum(...arr);
console.log(add);
// spread operator basically expand the array 