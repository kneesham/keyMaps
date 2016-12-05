function getLetter(event) {
  var x = event.which || event.keyCode;

  document.getElementById("letter").innerHTML = "the number is: " + x;



}
