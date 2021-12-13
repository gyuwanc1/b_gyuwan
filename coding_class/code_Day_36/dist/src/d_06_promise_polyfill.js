// d_06_promise_polyfill.js
// require("@babel/polyfill");
// import "@babel/polyfill";

const { resolve } = require("core-js/fn/promise");

const box = 10;
const fnBox = ()=>{return box;}
const fnPlus = (a = 3 ,b) => {
  //const c = a || 3;
  return a + b ;
}

class FileData{
  constructor (name, date){
    this.name = name;
    this.date = date;
  }
}

//-------------------------------------------

const promi = new Promise((resolve, reject)=> {
  setTimeout (()=>{
    resolve('success');
  },500)
});

const rel = promi.then( (resolve)=>{ return resolve; })
console.log(rel);