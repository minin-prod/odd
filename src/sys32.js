new Promise((result, reject) => {
	let container = document.getElementById("odd-container");

	{
		let navbar = document.createElement("nav");
		container.appendChild(navbar);
	}

	result(container);
}).then((res, err) => {
	document.getElementById("preloader").remove();
});
