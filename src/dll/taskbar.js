dll.taskbar = {};

dll.taskbar.init = () => {
	let layerNav = document.getElementById("odd-container").getElementsByClassName("nav")[0];
	let sectionMid = layerNav.getElementsByClassName("mid")[0];
	let sectionRight = layerNav.getElementsByClassName("right")[0];

	{
		let dt = document.createElement("div");

		sectionRight.appendChild(dt);

		dll.taskbar.timeService = setInterval(() => {
			let t = new Date();

			dt.innerText = `${t.getHours()}:${t.getMinutes()}`;
		}, 1000);
	}
}
