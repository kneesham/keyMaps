

function getLetter(event) {

  var alphabet = "";
  for( var i=0; i<26; i++)
  {

     alphabet += String.fromCharCode(97 + i);
  }
  document.getElementById("letter").innerHTML = "the alphabet is: " + alphabet;


}
