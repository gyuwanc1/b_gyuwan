//d_13_class4.js

const elTemp = document.querySelector('.temp');

const pr = ()=>{
  return new Promise(resolve=>{
    resolve();
  });
};

const fnMkdiv = (name)=>{  
    let mkDiv = document.createElement('.div');
    mkDiv.setAttribute('class', name);
    mkDiv.innerHtml=name;
    elTemp.append(mkDiv); 
}

pr()
.then(()=>{fnMkdiv('one')   })
.then(()=>{fnMkdiv('two')   })
.then(()=>{fnMkdiv('three') })
