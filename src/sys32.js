new Promise((result, reject) => {
	let container = document.getElementById("odd-container");
	let layerWall = document.createElement("div"); layerWall.classList.add("layer", "wall"); container.appendChild(layerWall);
	let layerApp = document.createElement("div"); layerApp.classList.add("layer", "app"); container.appendChild(layerApp);
	let layerNav = document.createElement("div"); layerNav.classList.add("layer", "nav"); container.appendChild(layerNav);

	{
		let navbar = document.createElement("nav");
		let left = document.createElement("div"); left.classList.add("section", "left");
		let mid = document.createElement("div"); mid.classList.add("section", "mid");
		let right = document.createElement("div"); right.classList.add("section", "right");

		{
			let menu = document.createElement("div");
			menu.classList.add("start");

			left.appendChild(menu);
		}

		navbar.appendChild(left);
		navbar.appendChild(mid);
		navbar.appendChild(right);

		layerNav.appendChild(navbar);
	}

	{
		let desktopmenu = {
			"New File": undefined,
			"New Folder": undefined,
			"Refresh": undefined
		}

		let navmenu = {
			"Settings": undefined,
			"Process Manager": undefined,
			"Window Manager": undefined
		}

		let timemenu = {
			"Date and Time": undefined,
			"Settings": undefined,
			"Process Manager": undefined,
			"Window Manager": undefined
		}

		layerNav.onmouseup = (e) => {
			if (e.button == 2) {
				if (e.target.attributes.class.nodeValue == "section mid") {
					dll.contextmenu.spawn(e, navmenu, { x: 0, y: 30 });
				} else if (e.target.attributes.class.nodeValue == "time") {
					dll.contextmenu.spawn(e, timemenu, { x: 0, y: 30 });
				} else if (e.target.attributes.class.nodeValue == "start") {
					// no
				} else {
					dll.contextmenu.spawn(e, desktopmenu);
				}
			}
		}
	}

	result(container);
}).then((res, err) => {
	dll.appearance.init();
	dll.taskbar.init();
	dll.start.init();
}).then((res, err) => {
	document.getElementById("preloader").remove();
}).catch((err) => {
	console.error(err);
	alert("An error occured while loading, reload the page or check the debug console for specifics on the error.");
});
