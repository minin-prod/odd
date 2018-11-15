dll.inspector = {};

dll.inspector.init = async () => { return new Promise((res, err) => {
	let inspector = document.getElementById("odd-inspector");

	inspector.style.width = "500px";

	res(1);
}); }
