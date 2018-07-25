dll.taskbar = {};

dll.taskbar.update = () => {
	let layerApp = document.getElementById("odd-container").getElementsByClassName("app")[0];

	dll.taskbar.windowview.innerHTML = "";
	
	for (let i = 0; i < layerApp.children.length; i++) {
		let win = layerApp.children[i];

		if (!win.classList.contains("app-1") && !win.classList.contains("app-4") ) {
			let item = document.createElement("div");
			item.classList.add("control", "hlist-item");
			item.innerText = win.children[0].children[0].innerText;

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
		dll.taskbar.windowview.classList.add("control", "hlist");

		sectionMid.appendChild(dll.taskbar.windowview);
	}
}
