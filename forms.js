function myprocessform(event) {
    debugger;
output("form processed");
event.preventDefault();
const form = event.target;
const emailInput = form[0];
const numberInput = form[1];
const commentsInput = form[2];

output( `Your email is ${value} <br>`);
}



