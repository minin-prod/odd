dll.contextmenu = {};

dll.contextmenu.Menu = class Menu extends dll.window.Window {
	constructor(origin, options = {}, offset = { x: 0, y: 0 }) {
		super(4, [], false);

		this.options = options;

		this.window.style.top = `${(origin.clientY - 40) + offset.y}px`;
		this.window.style.left = `${origin.clientX + offset.x}px`;

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

		document.addEventListener("mouseup", contextup);

		function contextup(e) {
			if (e == origin) return;

			document.removeEventListener("mouseup", contextup);
			document.getElementsByClassName("app-4")[0].remove();
		}
	}
}

dll.contextmenu.spawn = (e, options, offset = undefined) => {
	return new dll.contextmenu.Menu(e, options, offset);
}
