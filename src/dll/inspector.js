dll.inspector = {};

/** @type {HTMLElement} */
dll.inspector.inspector = undefined;

dll.inspector.open = false;
dll.inspector.width = 500;

dll.inspector.toggle = () => {
	let inspector = dll.inspector.inspector;

	inspector.classList.toggle("minimized");
	dll.inspector.open = !inspector.classList.contains("minimized");
}

dll.inspector.init = async () => { return new Promise((res, err) => {
	let inspector;

	inspector = dll.inspector.inspector = document.getElementById("odd-inspector");

	dll.inspector.open = !inspector.classList.contains("minimized");
	inspector.style.width = `${dll.inspector.width}px`;

	{ // inspector content
		inspector.innerHTML = `
			<div id="resize-handle" class="resize-handle"></div>
			<div class="container">
				<!-- content -->
			</div>
		`;
	}

	{ // shortcuts
		dll.keys.attach(inspector, {
			":i": () => dll.inspector.toggle()
		}, true);
	}

	res(1);
}); }
