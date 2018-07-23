dll.contextmenu = {};

dll.contextmenu.Menu = class Menu extends dll.window.Window {
	constructor(e, options = {}) {
		super(4, [], false);

		this.options = options;

		this.window.style.top = `${e.clientY - 40}px`;
		this.window.style.left = `${e.clientX}px`;

		this.MoveToFront();
	}
}

dll.contextmenu.spawn = (e, options) => {
	return new dll.contextmenu.Menu(e, options);
}
