// console.log("hello");
// var a=1;
// var a=5;//reassign,redeclare,function scoped
// console.log(a);
// // function s(){
// //     var b=10;
// // }
// // console.log(b);
// if(true){
//     var c=15;
// }
// console.log(c);
// let a=10;//reassign,not redeclared,block scoped
// let a=11;
// console.log(a);
// if(true){
//     let d=20;
// }
// console.log(d);
//const a=5; //not reaasign,not redeclared,block scoped
// console.log(a);//undefined but in let error
// var a=10;
// console.log(a);
// console.log(sum(5,7))
// function sum(a,b){
//     return a+b;
// }
//console.log(sum(5,7))
// const sum=function sum(a,b){
//     return a+b;
// }
// console.log(sum(5,7))
// function sum(){
//     return arguments[0]+arguments[1];
// }
// console.log(sum(5,6))
// const sum=(a,b)=>{
//     return a+b;
// }
// console.log(sum(5,6))
a=[1,2,3,4,'niket']
console.log(a.at(-1))
a.shift();
a.unshift(7);
a.pop();
console.log(a.findIndex(x=>x==3));
a.push(5);
console.log(a.at(-1))
console.log(a.sort())
console.log(a.sort((a,b)=>b-a));
for (item in a){
    console.log(item);
}
