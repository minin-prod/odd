dll.start = {};

dll.start.startMenu = class StartMenu extends dll.window.Window {
	constructor() {
		super(1, [], false);

		this.appdata.init = (window) => {
			let w = window.window;

			w.classList.add("start");
		}

		this.content.innerHTML = `
			<div class="control list">
				<div class="control list-item">Productivity</div>
				<div class="control list-item">Programming</div>
				<div class="control list-item">Tools</div>
				<div class="control list-item">Games</div>
				<div class="control list-item">File Manager</div>
				<div class="control list-item">Settings</div>
			</div>

			<div class="control divider"></div>

			<div class="control list">
				<div class="control list-item">Shutdown</div>
				<div class="control list-item">Restard</div>
				<div class="control list-item">Logout</div>
				<div class="control list-item">Sleep</div>
			</div>
		`;

		this.appdata.init(this);
	}
}

dll.start.menu = null;

dll.start.init = () => {
	let layerWall = document.getElementById("odd-container").getElementsByClassName("wall")[0];
	let layerApp = document.getElementById("odd-container").getElementsByClassName("app")[0];
	let button = document.getElementsByTagName("nav")[0].getElementsByClassName("start")[0];
	
	dll.start.menu = new dll.start.startMenu();
	dll.start.menu.window.classList.add("minimized");

	button.addEventListener("click", (e) => {
		dll.start.menu.window.classList.toggle("minimized");
	});

	document.addEventListener("click", (e) => {
		let targetClasses = e.target.attributes.class.nodeValue;

		if (!(
			targetClasses != "window-content" && targetClasses == "start" ||
			targetClasses == "window-content" && targetClasses != "start")) {
			dll.start.menu.window.classList.add("minimized");
		}
	});
}
