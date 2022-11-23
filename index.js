//3

// var exports = module.exports;

//4
// var exports = module.exports;

const add = (a, b) =>{
    return a+b;
}

//5 
//export.add = (a,b)=> a+b;

const sub = (a,b) =>{
    return a-b;
}

const mul = (a,b) =>{
    return a*b;
}

const div = (a,b) =>{
    return a/b;
}
console.log(add(2,5));
console.log(sub(9,3));
console.log(mul(5,4));
console.log(div(5,7));
module.exports = add;
module.exports = sub;
module.exports = mul;
module.exports = div;


//1
//module.exports ={
//      add:add,
//      sub:sub
//}

//2
//module.exports.add =add
//module.exports.sub =sub;
//export to index.js

//3
//exports.add = add;
//exports.sub = sub;

//4
//exports=add;