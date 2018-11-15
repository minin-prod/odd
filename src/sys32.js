new Promise((result, reject) => {
	let container = document.getElementById("odd-container");
	let layerWall = document.createElement("div"); layerWall.classList.add("layer", "wall"); container.appendChild(layerWall);
	let layerApp = document.createElement("div"); layerApp.classList.add("layer", "app"); container.appendChild(layerApp);
	let layerNav = document.createElement("div"); layerNav.classList.add("layer", "nav"); container.appendChild(layerNav);

	{
		let navbar = document.createElement("nav"); navbar.classList.add("fakefglass");
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
			"---": "---",
			"Refresh": undefined
		}

		let navmenu = {
			"Process Manager": undefined,
			"Window Manager": undefined,
			"---": "---",
			"Settings": undefined
		}

		let timemenu = {
			"Process Manager": undefined,
			"Window Manager": undefined,
			"---": "---",
			"Date and Time": undefined,
			"Settings": undefined
		}

		layerNav.onmouseup = (e) => {
			if (e.button == 2) {
				let classes = e.target.attributes.class.nodeValue;

				switch (classes) {
					case "time": {
						dll.contextmenu.spawn(e, timemenu, { x: 0, y: 20 });
					} break;

					case "start": {} break;

					default: {
						if (classes.endsWith(" control hlist-item")) {
							dll.contextmenu.spawn(e, utilGETWINMENU(layerApp.getElementsByClassName("window")[parseInt(classes.split(" ")[0])]), { x: 0, y: 20 });

							break;
						}

						if (classes.startsWith("section ")) {
							dll.contextmenu.spawn(e, navmenu, { x: 0, y: 20 });

							break;
						}

						dll.contextmenu.spawn(e, desktopmenu);
					}
				}
			}
		}
	}

	result(container);
}).then(async (res, err) => {
	await dll.keys.init();
	await dll.appearance.init();
	await dll.taskbar.init();
	await dll.start.init();
	await dll.inspector.init();
}).then((res, err) => {
	document.getElementById("preloader").remove();
}).catch((err) => {
	console.error(err);
	alert("An error occured while loading, reload the page or check the debug console for specifics on the error.");
});

function utilGETWINMENU(win) {
	return {
		"Minimize": win.children[0].children[1].children[0].onclick,
		"Maximize": win.children[0].children[1].children[1].onclick,
		"Close": win.children[0].children[1].children[2].onclick
	}
}
