dll.window = {};

dll.window.Window = class Window {
	constructor(appid = "0") {
		let body = document.getElementsByClassName("app")[0];
		let apps = dll.app.apps;
		let appdata = dll.app.appdata;

		// Get App Data
		this.appid = appid;
		this.appdata = appdata[apps[this.appid]];

		// Create Base Element
		this.window = document.createElement("div");
		this.window.classList.add("window");

		// Title Bar
		this.titlebar = document.createElement("div");
		this.titlebar.classList.add("window-title");
		this.titlebar.onmousedown = (e) => windowDragEvent(e, this.window);
		
		// Title Bar > Title
		this.titlebar.innerHTML += `<div class="window-title-title">${this.appdata.title}</div>`

		// Title Bar > Actions
		this.titlebar_buttons = document.createElement("div");
		this.titlebar_buttons.classList.add("window-title-buttons");

		// Title Bar > Actions > Minimize
		this.titlebar_buttons_min = document.createElement("div");
		this.titlebar_buttons_min.classList.add("window-title-buttons-min");
		this.titlebar_buttons_min.onclick = () => this.window.classList.toggle("minimized");

		// Title Bar > Actions > Maximize
		this.titlebar_buttons_max = document.createElement("div");
		this.titlebar_buttons_max.classList.add("window-title-buttons-max");
		this.titlebar_buttons_max.onclick = () => this.window.classList.toggle("maximized");

		// Title Bar > Actions > Close
		this.titlebar_buttons_close = document.createElement("div");
		this.titlebar_buttons_close.classList.add("window-title-buttons-close");
		this.titlebar_buttons_close.onclick = () => this.window.remove();

		// Window Content
		this.content = document.createElement("div");
		this.content.classList.add("window-content");
		this.content.innerHTML = this.appdata.content;
		
		// if app exists, add appid to classlist
		if (apps[appid]) this.window.classList.add(`app-${this.appid}`);

		// Append Children to Title Bar
		this.titlebar_buttons.appendChild(this.titlebar_buttons_min);
		this.titlebar_buttons.appendChild(this.titlebar_buttons_max);
		this.titlebar_buttons.appendChild(this.titlebar_buttons_close);
		this.titlebar.appendChild(this.titlebar_buttons);

		// Append Children to Base Window Element
		this.window.appendChild(this.titlebar);
		this.window.appendChild(this.content);
		
		// Set Window Start Locations
		this.window.style.top = "120px";
		this.window.style.left = "40px";

		// Move new Window to Front
		this.MoveToFront();

		// Attach Event Listeners
		this.window.onmousedown = (e) => {
			this.MoveToFront(e);
		}

		// Initialize App
		body.appendChild(this.window);
		this.appdata.init(this);
	}

	/**
	 * Move Window to Front on Click
	 * @param {MouseEvent} e
	 */
	MoveToFront(e) {
		let max = 0;

		Array.prototype.forEach.call(document.getElementsByClassName("app")[0].getElementsByClassName("window"), (x) => {
			let z = x.style.zIndex;
			
			max = Math.max(max, z);
		});

		this.window.style.zIndex = max + 1;
	}
}

/**
 * @param {MouseEvent} e
 * @param {Element} window
 */
function windowDragEvent(e, window) {
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;

	// Get Mouse Position on Startup
	pos3 = e.clientX;
	pos4 = e.clientY;

	// Attach Event Listeners
	document.onmouseup = closeDrag;
	document.onmousemove = elementDrag;

	/** @param {MouseEvent} e */
	function elementDrag(e) {
		// Calculate New Mouse Position
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;

		// Move to New Mouse Position
		window.style.top = (window.offsetTop - pos2) + "px";
		window.style.left = (window.offsetLeft - pos1) + "px";
	}

	function closeDrag() {
		// Detach Event Listeners
		document.onmouseup = null;
		document.onmousemove = null;
	}
}