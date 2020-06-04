const burger__menu  = document.querySelector('.burger__menu');
const main__menu = document.querySelector('.main-menu');
const order__call = document.querySelector('.order-call');
const ordered = document.querySelector('.ordered');
const main__menuBtn = document.querySelector('.main-menuBtn');
const orderedBtn = document.querySelector('.orderedBtn-closed');

burger__menu.addEventListener('click', function(e) {
  e.preventDefault();
  main__menu.style["display"] = 'flex';

});

main__menuBtn.addEventListener('click', function(e){
  e.preventDefault();
  main__menu.style["display"] = 'none';
})

order__call.addEventListener('click', function(e) {
  e.preventDefault();
  ordered.style["display"] = 'flex';

});

orderedBtn.addEventListener('click', function(e){
  e.preventDefault();
  ordered.style["display"] = 'none';
})



