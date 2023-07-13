// let's do destructring in function 
const boys={
    name:"sachin", 
    age:20, 
    address:{
        village:"nighwan",
        district:"arwal"
    }
}

function print({age, name}){
    console.log(`my name is ${name} and my age is ${age}`);
}

print(boys);