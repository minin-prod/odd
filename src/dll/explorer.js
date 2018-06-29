dll.explorer = {};

dll.explorer.init = (w) => {
	let container = document.createElement("div");
	container.classList.add("control", "splitter", "splitter-sidebar");

	let sidebar = document.createElement("div");
	sidebar.classList.add("control", "list");
	for (let i = 0; i < 20; i++) { sidebar.innerHTML += `<div class="control list-item">${i}</div>` }
	container.appendChild(sidebar);

	let display = document.createElement("div");
	display.classList.add("control", "icongrid");
	container.appendChild(display);

	w.content.appendChild(container);
}
