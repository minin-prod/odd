dll.keys = {};

dll.keys.registered = [];

dll.keys.init = async () => { return new Promise((res, err) => {
	document.addEventListener("keydown", (e) => {
		dll.keys.registered.forEach((group) => {
			if (!group.global && !group.location.classList.contains("focus")) return;

			Object.keys(group.shortcuts).forEach((shortcut) => {
				if (checkShortcut(e, shortcut)) {
					group.shortcuts[shortcut]();
					e.preventDefault();
				}
			});
		});
	});

	function checkShortcut(e, shortcut) {
		switch (shortcut[0]) {
			case "~": if (e.key == shortcut.substring(1) && e.altKey) return true; break;
			case "^": if (e.key == shortcut.substring(1) && e.shiftKey) return true; break;
			case "*": if (e.key == shortcut.substring(1) && e.ctrlKey) return true; break;
			case ":": if (e.key == shortcut.substring(1) && e.ctrlKey && e.altKey) return true; break;

			default: if (e.key == shortcut) return true; break;
		}

		return false;
	}

	res(1);
}); }

/**
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

	return dll.keys.registered.length - 1;
}

dll.keys.detach = (id) => {
	// remove from array
}
