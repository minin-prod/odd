dll.contextmenu = {};

dll.contextmenu.Menu = class Menu extends dll.window.Window {
	constructor(e, options = {}) {
		super(4, [], false);

		this.options = options;

		this.window.style.top = `${e.clientY - 40}px`;
		this.window.style.left = `${e.clientX}px`;

		this.MoveToFront();

		this.optionsContainer = document.createElement("div");
		this.optionsContainer.classList.add("control", "list");

		Object.keys(options).forEach((option) => {
			let item = document.createElement("div");
			item.classList.add("control", "list-item");
			item.innerText = option;

			item.addEventListener("mouseup", options[option]);

			this.optionsContainer.appendChild(item);
		});

		this.content.appendChild(this.optionsContainer);
	}
}

dll.contextmenu.spawn = (e, options) => {
	return new dll.contextmenu.Menu(e, options);
}
