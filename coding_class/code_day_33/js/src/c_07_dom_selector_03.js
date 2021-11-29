//c_07_dom_js

var bestBox =document.getElementById('bestBox');
var bestArea = bestBox.getElementsByClassName('best_area')[0]; //클래스네임은 여러번 쓸수있어서 
//그중 해당되는것들중 몇번쨰꺼 를 가지고 오는것.
var bestUl = bestArea.getElementsByTagName('ul')[0];
var bestLi = bestUl.children;

//console.log(bestLi);

/*
var liLen = bestLi.length;
console.log(liLen);
var liArr = [];
for(var i = 0;i<liLen;i++){
  liArr.push(bestLi[i]);
}
console.log(liArr);
*/

var liArr = [].slice.call(bestLi);
console.log(liArr);

liArr.forEach(function(selector,index){
  selector.children[0].addEventListener('click',function(e){
    e.preventDefault();
    setI = index;
    selector.classList.add('on');
    console.log(this,index);
  })
})
//여러가지의 버튼이나 링크가 있을경우  무조건적으로 배열형식으로 변경하여 사용