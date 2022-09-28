var x;
var y=0;
var ans = document.getElementById("answer");
answer.onclick = function() 
{
x = document.getElementById("forUser").value;
if (x =="") {
document.getElementById("output").innerHTML = "Enter some text please";
} else {
if (y < 10) {
x = x.replace(/[a-z]/g, '');
x = x.replace(/[^qruopsdgjcb]/gi, '');
console.log(x);
document.getElementById("output").innerHTML = x;
document.getElementById("forUser").value = "";
document.getElementById("output2").innerHTML = ++y;
} 
else { 
document.getElementById("output").innerHTML = "You have reached the maximum amount";
document.getElementById("forUser").value = "";
document.getElementById("output2").innerHTML = y;
}
}
};
