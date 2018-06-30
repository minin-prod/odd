dll.explorer = {};

dll.explorer.init = (w) => {
	let man = new dll.hdd.manager();

	let splitter = document.createElement("div");
	splitter.classList.add("control", "splitter", "splitter-navbar");

	let navbar = document.createElement("div");
	navbar.classList.add("control", "panel", "nav");

	{
		let up = document.createElement("div");
		up.classList.add("control", "button", "button-small", "icon-up");
		navbar.appendChild(up);

		up.addEventListener("click", (e) => {
			man.cd("..");
			update(display);
		});
	}

	let address = document.createElement("p");
	navbar.appendChild(address);

	splitter.appendChild(navbar);

	let container = document.createElement("div");
	container.classList.add("control", "splitter", "splitter-sidebar");

	let sidebar = document.createElement("div");
	sidebar.classList.add("control", "list", "sidebar");
	for (let i = 0; i < 20; i++) { sidebar.innerHTML += `<div class="control list-item">item ${i}</div>` }
	container.appendChild(sidebar);

	let display = document.createElement("div");
	display.classList.add("control", "icongrid");
	container.appendChild(display);

	if (w.args.length > 0) {
		man.cdlist(w.args);
	}

	function update(display) {
		display.innerHTML = "";
		
		address.innerText = man.loc.join("\\");

		Object.keys(man.current).forEach((item) => {
			if (item != "type") {
				let griditem = document.createElement("div");
				griditem.classList.add("control", "icongrid-item");
	
				{
					let griditemIcon = document.createElement("div");
					griditemIcon.classList.add("icon-folder");
	
					griditem.appendChild(griditemIcon);
				}
	
				{
					let griditemText = document.createElement("p");
					griditemText.innerText = item;
					
					griditem.appendChild(griditemText);
				}

				display.appendChild(griditem);
	
				griditem.addEventListener("click", (e) => {
					man.cd(item);
					update(display);
				});
			}
		});
	}

	splitter.appendChild(container);
	w.content.appendChild(splitter);
	update(display);
}
