function getLetter(event) {
  // var x = event.which || event.keyCode;
  //
  // document.getElementById("letter").innerHTML = "the number is: " + x;
  //

  var alphabet = "";
  for( var i=0; i<26; i++)
  {

     alphabet += String.fromCharCode(97 + i);
  }
  document.getElementById("letter").innerHTML = "the alphabet is: " + alphabet;


}
