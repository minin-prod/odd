dll.appearance = {};

dll.appearance.settings = {
	"wallpaper": "#1c1c1c",
	"accentRGBA": "0, 0, 0",
	"accent": "#222226",
	"textColor": "#ddd",
	"linkColor": "#222226"
}

dll.appearance.init = async () => { return new Promise((res, err) => {
	let config = dll.appearance.settings;

	let head = document.getElementsByTagName("head")[0];

	let tnns = [
		"system",
		"inspector",
		"controls",
		"img"
	]

	let tnnsLoaded = 0;

	{ // settings
		let settings = ":root {\n";
		Object.keys(config).forEach((set) => {
			settings += `\t--${set}: ${config[set]};\n`
		});
		settings += "}";

		let style = document.createElement("style");
		style.innerHTML = settings;
		head.appendChild(style);
	}

	{ // tnn files
		let anchor = document.getElementById("tnn-anchor");

		tnns.forEach((tnn) => {
			let link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = `./src/tnn/${tnn}.css`;

			document.head.insertBefore(link, anchor);

			link.addEventListener("load", () => {
				tnnsLoaded += 1;
				checkLoaded();
			});
		});
	}

	function checkLoaded() {
		if (tnnsLoaded == tnns.length) res(1);
	}
}); }
