new Promise((result, reject) => {
	let container = document.getElementById("odd-container");
	let layerWall = document.createElement("div"); layerWall.classList.add("layer", "wall"); container.appendChild(layerWall);
	let layerApp = document.createElement("div"); layerApp.classList.add("layer", "app"); container.appendChild(layerApp);
	let layerNav = document.createElement("div"); layerNav.classList.add("layer", "nav"); container.appendChild(layerNav);

	{
		let navbar = document.createElement("nav");
		layerNav.appendChild(navbar);
	}

	result(container);
}).then((res, err) => {
	document.getElementById("preloader").remove();
});
