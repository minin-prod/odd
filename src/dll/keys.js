dll.keys = {};

dll.keys.registered = [];

dll.keys.init = () => {
	document.addEventListener("keydown", (e) => {
		// check through events
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
