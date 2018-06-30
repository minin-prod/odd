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

	let man = new dll.hdd.manager();

	if (w.args.length > 0) {
		man.cdlist(w.args);
	}

	function update(display) {
		display.innerHTML = "";

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

	w.content.appendChild(container);
	update(display);
}
