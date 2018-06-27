var settings = {};

dll.appearance = {};

dll.appearance.settings = settings = {
	"backgroundStyle": "solid",
	"background": "#1c1c1c",
	"accent": "0, 0, 0"
}

dll.appearance.init = () => {
	let layerWall = document.getElementsByClassName("wall")[0];
	let layerNav = document.getElementsByClassName("nav")[0];

	{
		if (settings.backgroundStyle == "solid") {
			layerWall.style.backgroundColor = settings.background;
		}
	}

	{
		let navbar = layerNav.getElementsByTagName("nav")[0];
		navbar.style.backgroundColor = `rgba(${settings.accent}, 0.2)`;
	}
}
