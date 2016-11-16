function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) ==' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function showDock() {
	DAdock.style.display = "block";
	document.body.className = "signed-in " + document.body.className;
	bannerContent.className += " signed-in";
	if (window.getComputedStyle(header, null).getPropertyValue("position") == "fixed") {
		header.className += " signed-in";
	}
	dockToggle.style.top = "55px";
	dockToggle.innerHTML = "<p>▲</p>";
	createCookie('hide', 'false', false);
}

function hideDock() {
	DAdock.style.display = "none";
	document.body.className = document.body.className.slice(10);
	bannerContent.removeAttribute("class");
	if (window.getComputedStyle(header, null).getPropertyValue("position") == "fixed") {
		header.removeAttribute("class");
	}
	dockToggle.style.top = "-17px";
	dockToggle.innerHTML = "<p>▼</p>";
	createCookie('hide', 'true', false);
}

var isEdit = document.getElementById("da-view-status") != null;
if (isEdit) {
	var DAdock = document.getElementById("da-dock");
	var dockToggle = document.createElement("div");
	var bannerContent = document.getElementById("banner-content");
	var header = document.getElementById("header");
	dockToggle.className = "dock-toggle";
	dockToggle.innerHTML = "<p>▲</p>";
	if (readCookie('hide') == "true") {
		hideDock();
	}
	dockToggle.onclick = function() {
		if (DAdock.style.display == "none") {
			showDock();
		} else {
			hideDock();
		}
	}
	document.body.insertBefore(dockToggle, DAdock);
}