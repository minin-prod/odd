var settings = {};

dll.appearance = {};

dll.appearance.settings = settings = {
	"wallpaper": "#1c1c1c",
	"accent": "0, 0, 0"
}

dll.appearance.init = () => {
	let layerWall = document.getElementsByClassName("wall")[0];
	let layerNav = document.getElementsByClassName("nav")[0];

	{
		layerWall.style.background = settings.background;
	}

	{
		let navbar = layerNav.getElementsByTagName("nav")[0];
		navbar.style.backgroundColor = `rgba(${settings.accent}, 0.2)`;
	}
}
