dll.appearance = {};

dll.appearance.settings = {
	"wallpaper": "#1c1c1c",
	"accentRGBA": "rgba(0, 0, 0, 0.2)",
	"accent": "#000",
	"textColor": "#ddd"
}

dll.appearance.init = () => {
	let settings = dll.appearance.settings;

	let head = document.getElementsByTagName("head")[0];
	let layerWall = document.getElementsByClassName("wall")[0];
	let layerNav = document.getElementsByClassName("nav")[0];

	{
		let _settings = ":root {\n";
		Object.keys(settings).forEach((set) => {
			_settings += `\t--${set}: ${settings[set]};\n`
		});
		_settings += "}";

		let _style = document.createElement("style");
		_style.innerHTML = _settings;
		head.appendChild(_style);
	}
}
