//rwd_import_nav.js

{
const path = '../temp/';
const data = {
  mob:path + 'rwd_nav_mobile.html',
  laptop:path + 'rwd_nav_laptop.html'
}
const elnav = document.querySelector('#navBox');



const fnDeviceNav = (type)=> {

  fetch(type)
  .then(response => response.text())
  .then(element=>{
    elnav.innerHTML = element;
  })
};

fnDeviceNav(data.laptop)

}