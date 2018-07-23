dll.contextmenu = {};

dll.contextmenu.Menu = class Menu extends dll.window.Window {
	constructor(e, options = {}) {
		super(4, [], false);

		this.options = options;

		this.window.style.top = 0;
		this.window.style.left = 0;
	}
}

dll.contextmenu.spawn = (e, options) => {
	return new dll.contextmenu.Menu(e, options);
}
