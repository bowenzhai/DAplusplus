var isEdit = document.getElementById("da-view-status") != null;
if (isEdit) {
	var DAdock = document.getElementById("da-dock");
	var dockToggle = document.createElement("div");
	var bannerContent = document.getElementById("banner-content");
	var header = document.getElementById("header");
	dockToggle.className = "dock-toggle";
	dockToggle.innerHTML = "<p>▲</p>";
	dockToggle.onclick = function() {
		if (DAdock.style.display == "none") {
			DAdock.style.display = "block";
			document.body.className = "signed-in " + document.body.className;
			bannerContent.className += " signed-in";
			if (window.getComputedStyle(header, null).getPropertyValue("position") == "fixed") {
				header.className += " signed-in";
			}
			dockToggle.style.top = "55px";
			dockToggle.innerHTML = "<p>▲</p>";
		} else {
			DAdock.style.display = "none";
			document.body.className = document.body.className.slice(10);
			bannerContent.removeAttribute("class");
			if (window.getComputedStyle(header, null).getPropertyValue("position") == "fixed") {
				header.removeAttribute("class");
			}
			dockToggle.style.top = "-17px";
			dockToggle.innerHTML = "<p>▼</p>";
		}
	}
	document.body.insertBefore(dockToggle, DAdock);
}