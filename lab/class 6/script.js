var apple = 'Winesap';
var inventory = 12;
var delivered = 100;
var newQty = inventory + delivered;
var lable = newQty + '' + apple + 's';
console.log(lable);

function createAppLable(apple, inventory, delievered*

var appleLable = createAppleLable('Jonagold', 22, 200)

function createAppLable(apple, inventory, delivered){
  var newQty = inventory + delivered;
  var lable = newQty + '' + apple + 's';
  return lable;
}

window.addEventListener('click', function(){
  console.log('Hello');
});

function clickwindow(){
  console.log('Hello!');
}

window.addEventListener('click', clickwindow);
