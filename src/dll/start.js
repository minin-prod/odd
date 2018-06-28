dll.start = {};

dll.start.startMenu = class StartMenu extends dll.window.Window {
	constructor() {
		super(1, false);

		this.content.innerHTML = `
			<div class="control list">
				<div class="control list-item">Productivity</div>
				<div class="control list-item">Programming</div>
				<div class="control list-item">Tools</div>
				<div class="control list-item">Games</div>
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

dll.start.init = () => {
	let button = document.getElementsByClassName("left")[0].getElementsByClassName("start")[0];

	button.addEventListener("click", (e) => {
		new dll.start.startMenu();
	});
}
