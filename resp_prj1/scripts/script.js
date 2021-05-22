var d = new Date().toLocaleDateString('fa-IR');
document.getElementById("current_date").innerHTML = d;

var t = new Date();
var n = t.toLocaleTimeString('fa-IR');
document.getElementById("current_time").innerHTML = n;