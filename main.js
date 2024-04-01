var terminalbody = document.getElementById("terminal-body");
var textinput = document.getElementsById("terminal-input");


var commands = [];

/* Skriver ut prefix når en loader nettsiden*/
document.addEventListener('DOMContentLoaded', (event) => {
  const prefixElement = document.querySelector('.command-prefix');
  const text = '[user@portfolio-nazliQ ~]$ ';
  let index = 0;
 
  function typeOutPrefix() {
      if (index < text.length) {
          prefixElement.textContent += text.charAt(index);
          index++;
         
          setTimeout(typeOutPrefix, 200); // Adjust speed as necessary
      } 
  }
  
  typeOutPrefix();
});
