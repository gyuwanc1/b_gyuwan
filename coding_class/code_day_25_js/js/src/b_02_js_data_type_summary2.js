
var dicList = [];
// dicList.push('a');
// dicList.push('b');
// dicList.push('c');
// dicList.push('d');
// dicList.push('f');
// dicList.push('l');
// console.log( dicList);

var fn1 = function(data){
   dicList.push(data); //배열에 담는 기능
   return data; //함수실행시 결과값
};

fn1('popo');
console.log(dicList)