dll.keys = {};

dll.keys.registered = [];

dll.keys.init = () => {
	document.addEventListener("keydown", (e) => {
		dll.keys.registered.forEach((group) => {
			Object.keys(group.shortcuts).forEach((shortcut) => {
				switch (shortcut[0]) {
					case "~": {
						if (e.key == shortcut.substring(1) && e.altKey) group.shortcuts[shortcut]();
					} break;

					default: {
						if (e.key == shortcut) group.shortcuts[shortcut]();
					} break;
				}
			});
		});
	});
}

/**
 * 
 * @param {Element} location
 * @param {object} shortcuts
 * @param {Boolean} global
 * @returns {Number} id
 */
dll.keys.attach = (location, shortcuts, global = false) => {
	dll.keys.registered.push({
		location: location,
		shortcuts: shortcuts,
		global: global
	});

	return dll.keys.registered.length;
}

dll.keys.detach = (id) => {
	// remove from array
}
