dll.explorer = {};

dll.explorer.init = (w) => {
	let container = document.createElement("div");
	container.classList.add("control", "splitter", "splitter-sidebar");

	let sidebar = document.createElement("div");
	sidebar.classList.add("control", "list", "sidebar");
	for (let i = 0; i < 20; i++) { sidebar.innerHTML += `<div class="control list-item">item ${i}</div>` }
	container.appendChild(sidebar);

	let display = document.createElement("div");
	display.classList.add("control", "icongrid");
	container.appendChild(display);
}
