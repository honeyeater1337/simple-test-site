var x;
var y=0;
var ans = document.getElementById("answer");
answer.onclick = function() 
{
x = document.getElementById("forUser").value;
console.log(x);
x = x.replace(/[a-z]/g, '');
x = x.replace(/[^qruopsdgjcb]/gi, '');
console.log(x);
document.getElementById("output").innerHTML = x;
document.getElementById("forUser").value = "";
document.getElementById("output2").innerHTML = ++y;
};
