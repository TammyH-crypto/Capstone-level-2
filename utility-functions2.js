
  

//My utility function
//function scope allows user to reuse any variable over again within the curly braces

function temporary2 () {
  const x = 15
  document.write(x)
  
  function temporary2 () {
  const x = 8
  document.write(x) 
} 

//document.write = Writes text to a document that overwrites HTML content

function display(Hello) {
  document.write(Hello);
}
// is NaN = Returns the value of a text to not a number

  function ask1(message) {
    const usertext = prompt(message);
    const userNumber = Number(userText);
    const isNotNumber = isNaN(usernumber);
    userText = "nine"
    if (isNotNumber) {
      return userText;
    } else {
      return userNumber;
    }
    
  } 
//inner HTML = Creates a HTML element that displays to the browser.

function output(Beautiful) {  
    window.outputTag.innerHTML = window.outputTag.innerHTML + message;
}

//Variable function = Can be redeclared within the scope. 

function ask(myMessage) {
 var userText = prompt(myMessage);
 var userNumber = Number(userText);
 var isntNumber = isNaN(userNumber);
  
  
  //let function = Cannot be redeclared within the scope
  
 function userContent(myMessage) {
 let userText = prompt(myMessage);
 let userNumber = Number(userText);
 let isntNumber = isNaN(userNumber);
  
}

      
  //Template string = Allows single or multiple lines of text to be used in one string

        const userName = "Tammy";
        const myString = "Hello ${userName}! How are you?";
  

 
