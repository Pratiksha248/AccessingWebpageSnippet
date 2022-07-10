var name = prompt("Who's this?")
var upper1 = name.charAt(0).toUpperCase()
var rest = name.slice(1,name.length)
rest = rest.toLowerCase()
var password = prompt("Enter password:")
if(password == "xyz@123")                   //Change accordingly for Access
{alert("Welcome " + upper1 + rest + '!')}
else
{alert('Access denied, please try again!')}