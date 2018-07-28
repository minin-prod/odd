dll.explorer = {};

dll.explorer.settings_names = {
	"time": "Date and Time",
	"appearance": "Personalize",
	"accessability": "Ease of Access",
	"system": "My Computer"
}

dll.explorer.settings_icons = {
	"time": "icon-clock",
	"appearance": "icon-paint",
	"accessability": "icon-wheelchair",
	"system": "icon-monitor"
}

dll.explorer.init = (w) => {
	let man = new dll.hdd.manager();

	if (w.args.length > 0) {
		man.cdlist(w.args);
	}

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
	container.classList.add("control", "flex");

	if (man.loc[0] != "settings") {
		container.classList.add("splitter", "splitter-sidebar");

		let sidebar = document.createElement("div");
		sidebar.classList.add("control", "list", "sidebar");
		for (let i = 0; i < 20; i++) { sidebar.innerHTML += `<div class="control list-item">item ${i}</div>` }
		container.appendChild(sidebar);
	}

	let display = document.createElement("div");
	display.classList.add("control", "icongrid");
	container.appendChild(display);

	function update(display, psuedomode = false, psuedoquery = undefined) {
		display.innerHTML = "";
		
		if (!psuedomode) address.innerText = man.loc.join("/");

		Object.keys(man.current).forEach((item) => {
			let pseudomatch = false;

			if (psuedomode) {
				pseudomatch = (man.current[item]["_pseudoname"] == psuedoquery);
			} else {
				pseudomatch = true;
			}

			if (pseudomatch && !item.startsWith("_")) {
				let griditem = document.createElement("div");
				griditem.classList.add("control", "icongrid-item");
	
				{
					let griditemIcon = document.createElement("div");

					if (man.loc[0] == "settings") {
						griditemIcon.classList.add(dll.explorer.settings_icons[item]);
					} else {
						if (man.current[item]["_type"] == "file") {
							let filetype = man.current[item]["_icon"] ? man.current[item]["_icon"] : item.split(".")[item.split(".").length - 1];

							switch (filetype) {
								case "exe": griditemIcon.classList.add("icon-exe"); break;
								case "mp3": griditemIcon.classList.add("icon-audio"); break;
								case "mp4": griditemIcon.classList.add("icon-video"); break;
								case "png": griditemIcon.classList.add("icon-image"); break;
								case "jpg": griditemIcon.classList.add("icon-image"); break;
								case "jpeg": griditemIcon.classList.add("icon-image"); break;
								case "js": griditemIcon.classList.add("icon-code"); break;
								case "css": griditemIcon.classList.add("icon-code"); break;
								case "html": griditemIcon.classList.add("icon-code"); break;
								case "txt": griditemIcon.classList.add("icon-txt"); break;
							
								default:
									griditemIcon.classList.add("icon-file");
							}
						} else if (man.current[item]["_type"] == "dir") {
							griditemIcon.classList.add("icon-folder");
						}
					}
	
					griditem.appendChild(griditemIcon);
				}
	
				{
					let griditemText = document.createElement("p");

					if (man.loc[0] == "settings") {
						griditemText.innerText = dll.explorer.settings_names[item];
					} else {
						griditemText.innerText = item;
					}
					
					griditem.appendChild(griditemText);
				}

				display.appendChild(griditem);
	
				griditem.onclick = (e) => {
					if (man.current[item]["_type"] == "file") {
						let filetype = item.split(".")[item.split(".").length - 1];

						switch (filetype) {
							case "exe": new dll.window.Window("-1", [], true, man.current[item].appdata); break;
						
							default:
								man.loc.push(item);
								new dll.window.Window(6, man.loc);
								man.loc.pop();
						}
					} else if (man.current[item]["_type"] == "dir") {
						man.cd(item);
						update(display);
					}
				}
			}

			if (item == "_pseudo" && !psuedomode) {
				let query = man.current["_pseudo"];
				let querylocaction = man.current["_pseudolocation"];

				man.cdlist(querylocaction);
				update(display, true, query);
			}
		});
	}

	splitter.appendChild(container);
	w.content.appendChild(splitter);
	update(display);
}
