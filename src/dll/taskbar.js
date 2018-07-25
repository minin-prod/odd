dll.taskbar = {};

dll.taskbar.update = () => {
	let layerApp = document.getElementById("odd-container").getElementsByClassName("app")[0];

	dll.taskbar.windowview.innerHTML = "";
	
	for (let i = 0; i < layerApp.getElementsByClassName("window").length; i++) {
		let win = layerApp.getElementsByClassName("window")[i];

		if (!win.classList.contains("app-1") && !win.classList.contains("app-4") ) {
			let item = document.createElement("div");
			item.classList.add("control", "hlist-item");
			item.innerText = win.children[0].children[0].innerText;

			if (win.classList.contains("focus")) item.classList.add("focus");

			item.onclick = win.onmousedown;

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
			let t = new Date();

			dt.innerText = `${t.getHours()}:${t.getMinutes()}\n${t.getMonth()+1}/${t.getDate()}/${t.getFullYear()}`;
		}, 1000);
	}

	{
		dll.taskbar.windowview = document.createElement("div");
		dll.taskbar.windowview.classList.add("control", "hlist", "light");

		sectionMid.appendChild(dll.taskbar.windowview);
	}
}
