dll.start = {};

dll.start.init = () => {
	let button = document.getElementsByClassName("left")[0].getElementsByClassName("start")[0];

	button.addEventListener("click", (e) => {
		new dll.window.Window(1);
	});
}
