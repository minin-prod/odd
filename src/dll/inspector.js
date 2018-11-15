dll.inspector = {};

/** @type {HTMLElement} */
dll.inspector.inspector = undefined;

/** @type {HTMLElement} */
dll.inspector.tabs = undefined;
/** @type {HTMLElement} */
dll.inspector.content = undefined;

dll.inspector.open = false;
dll.inspector.width = 400;
dll.inspector.panelHeight = 400;

dll.inspector.toggle = () => {
	let inspector = dll.inspector.inspector;

	inspector.classList.toggle("minimized");
	dll.inspector.open = !inspector.classList.contains("minimized");
}

dll.inspector.selectTab = (tab) => {
	switch (tab) {
		case "inspector": {
			// code
		} break;

		case "styles": {
			// code
		} break;

		case "console": {
			// code
		} break;

		default: {
			throw new Error(`Invalid Tab: ${tab}
Expected Values:
	- "inspector"
	- "styles"
	- "console"`);
		}
	}
}

dll.inspector.init = async () => { return new Promise((res, err) => {
	let inspector;

	let tabs;
	let content;

	inspector = dll.inspector.inspector = document.getElementById("odd-inspector");

	dll.inspector.open = !inspector.classList.contains("minimized");
	inspector.style.width = `${dll.inspector.width}px`;

	{ // inspector content
		inspector.innerHTML = `
			<div class="devtools-resize-handle"></div>
			<div class="container">
				<div class="tablist"></div>
				<div class="wrapper"></div>
			</div>
		`;
	}

	tabs = dll.inspector.tabs = inspector.children[1].children[0];
	content = dll.inspector.content = inspector.children[1].children[1];

	{ // tab list
		let tabInspector = document.createElement("div"); tabs.appendChild(tabInspector);
		let tabInspectorText = document.createElement("div"); tabInspector.appendChild(tabInspectorText);
		tabInspectorText.innerText = "Inspector"; tabInspector.classList.add("active");

		let tabStyles = document.createElement("div"); tabs.appendChild(tabStyles);
		let tabStylesText = document.createElement("div"); tabStyles.appendChild(tabStylesText);
		tabStylesText.innerText = "Styles";

		let tabConsole = document.createElement("div"); tabs.appendChild(tabConsole);
		let tabConsoleText = document.createElement("div"); tabConsole.appendChild(tabConsoleText);
		tabConsoleText.innerText = "Console";
	}

	{ // shortcuts
		dll.keys.attach(inspector, {
			":i": () => dll.inspector.toggle()
		}, true);
	}

	res(1);
}); }
