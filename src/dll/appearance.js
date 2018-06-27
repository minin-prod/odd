var settings = {};

dll.appearance = {};

dll.appearance.settings = settings = {
	"backgroundStyle": "solid",
	"background": "#1c1c1c"
}

dll.appearance.init = () => {
	let layerWall = document.getElementsByClassName("wall")[0];

	{
		if (settings.backgroundStyle == "solid") {
			layerWall.style.backgroundColor = settings.background;
		}
	}
}
