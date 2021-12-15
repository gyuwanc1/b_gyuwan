//iterrator

//for,forEach,for-of 사용시간 체크

const arr =['banana','apple','iphone','samsung','js',1,2,3,4,5,];

// console.time('log');
// console.log(arr);
// console.timeEnd('log');




console.time('forEach - ');
arr.forEach((d)=>{
  console.log(d)
})
console.timeEnd('forEach - ');

console.time('forEach2 - ');
arr.forEach(function(d){
  console.log(d)
})
console.timeEnd('forEach2 - ');


console.time('for - ');
for(let d=0; d<arr.length; d++){
  console.log(arr[d]);
}
console.timeEnd('for - ');


console.time('for-of');
for(let d of arr){
  console.log(d);
}
console.timeEnd('for-of');

