//the event is triggered when the page loads
window.addEventListener('load', function(e){
  //name the variables
  var appleGrid = document.getElementById('apple-grid');
  var appleList = document.getElementById('apple-list');
  var appleThumbs = document.getElementById('apple-thumbs');
  var gridApples = document.querySelectorAll('.apple');

//a message to the console, the console is useful for testing purposes
  console.log(gridApples);

//calls a provided function once for each element in an array, in order
  gridApples.forEach((gridApple, i) => {
    //event means that when an apple is clicked, it is picked
    gridApple.addEventListener('click', pickApple);
  });

//Name of the apple is showed through this function
  function pickApple(e) {
    //specify where to open the linked function
    var apple = e.target;
    //converts a number to a string
    var appleName = apple.dataset.apple.toString();

//creates the element node with the specified name
    var appleListItem = document.createElement('li');

//returns the first element that matches a specified CSS selector
    var ol = appleList.querySelector('ol');

    //appends a node as the last child of a node
    ol.appendChild(appleListItem);
    //the apple name is showed in certain place
    appleListItem.innerText = appleName;

//creates a copy of the node and then returns the clone
    var appleThumb = apple.cloneNode(true);
    //specify which two objects
    appleThumbs.appendChild(appleThumb);
  }
})
