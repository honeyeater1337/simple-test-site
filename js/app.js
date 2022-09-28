var x;
var y=0;
var ans = document.getElementById("answer");
answer.onclick = function() 
{
if (y < 10) {
x = document.getElementById("forUser").value;
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
};
