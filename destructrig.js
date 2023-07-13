// destructring in objects
const boys={
    name:"sachin", 
    age:20, 
    address:{
        village:"nighwan",
        district:"arwal"
    }
}

// let's destructure
const {age, name, address:{district, village}}=boys;
console.log(name, age, village, district);

// we can do destructring of nested object also like i did for address 

