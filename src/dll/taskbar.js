dll.taskbar = {};

dll.taskbar.update = () => {
	let layerApp = document.getElementById("odd-container").getElementsByClassName("app")[0];

	dll.taskbar.windowview.innerHTML = "";
	
	for (let i = 0; i < layerApp.getElementsByClassName("window").length; i++) {
		let win = layerApp.getElementsByClassName("window")[i];

		if (!win.classList.contains("app-1") && !win.classList.contains("app-4") ) {
			let item = document.createElement("div");
			item.classList.add(i, "control", "hlist-item");
			item.innerText = win.children[0].children[0].innerText;

			if (win.classList.contains("focus")) item.classList.add("focus");

			item.onclick = () => {
				if (item.classList.contains("focus")) {
					utilGETWINTB(win).children[0].onclick();
				} else {
					win.onmousedown();
				}
			};

			dll.taskbar.windowview.appendChild(item);
		}
	}
}

dll.taskbar.init = () => {
	let layerNav = document.getElementById("odd-container").getElementsByClassName("nav")[0];
	let sectionMid = layerNav.getElementsByClassName("mid")[0];
	let sectionRight = layerNav.getElementsByClassName("right")[0];

	{
		let dt = document.createElement("div");
		dt.classList.add("time");

		sectionRight.appendChild(dt);

		dt.addEventListener("click", (e) => {
			new dll.window.Window(3, ["time"]);
		});

		dll.taskbar.timeService = setInterval(() => {
			utilSETTIME(dt);
		}, 10000);

		utilSETTIME(dt);
	}

	{
		dll.taskbar.windowview = document.createElement("div");
		dll.taskbar.windowview.classList.add("control", "hlist", "light", "paralax");

		sectionMid.appendChild(dll.taskbar.windowview);
	}
}

function utilSETTIME(clock) {
	let t = new Date();

	let h = t.getHours();
	let m = t.getMinutes();

	h = h.toString().length == 1 ? `0${h}` : h;
	m = m.toString().length == 1 ? `0${m}` : m;

	let month = t.getMonth() + 1;
	let day = t.getDate();

	month = month.toString().length == 1 ? `0${month}` : month;
	day = day.toString().length == 1 ? `0${day}` : day;

	clock.innerText = `${h}:${m}\n${month}/${day}/${t.getFullYear()}`;
}

function utilGETWINTB(win) {
	return win.children[0].children[1];
}
