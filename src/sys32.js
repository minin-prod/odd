new Promise((result, reject) => {
	let container = document.getElementById("odd-container");
	let layerWall = document.createElement("div"); layerWall.classList.add("layer", "wall"); container.appendChild(layerWall);
	let layerApp = document.createElement("div"); layerApp.classList.add("layer", "app"); container.appendChild(layerApp);
	let layerNav = document.createElement("div"); layerNav.classList.add("layer", "nav"); container.appendChild(layerNav);

	{
		let navbar = document.createElement("nav");
		let left = document.createElement("div"); left.classList.add("left");
		let mid = document.createElement("div"); mid.classList.add("mid");
		let right = document.createElement("div"); right.classList.add("right");

		navbar.appendChild(left);
		navbar.appendChild(mid);
		navbar.appendChild(right);

		layerNav.appendChild(navbar);
	}

	result(container);
}).then((res, err) => {
	dll.appearance.init();
}).then((res, err) => {
	document.getElementById("preloader").remove();
});
