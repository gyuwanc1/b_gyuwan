//a_01 modal

// DOM 
var modalBox = document.querySelector('.modal_box');
var modalBg = document.querySelector('.modal_bg');
var openBtn = document.querySelector('.modal_btn');
var closeBtn = document.querySelector('.close_btn');


// functions 
var clickOn = function(){
  modalBox.style.display='block';
  modalBg.style.display='block';
}

var clickOff = function(){
  modalBox.style.display='none';
  modalBg.style.display='none';  
}

// event 
openBtn.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(openBtn);
  if (getComputedStyle(modalBg).display === 'none' && getComputedStyle(modalBox).display === 'none') {
    modalBox.style.display='block';
    modalBg.style.display='block';
  } 
});

closeBtn.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(closeBtn);
  if (getComputedStyle(modalBg).display === 'block' && getComputedStyle(modalBox).display === 'block') {
    modalBox.style.display='none';
    modalBg.style.display='none';
  }

});


