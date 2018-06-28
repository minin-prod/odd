dll.app = {};

dll.app.apps = {
	"0": "nullapp",
	"1": "startmenu"
}

dll.app.appdata = {
	"nullapp": {
		title: "NULL",
		meta: {
			author: "Minin Productions",
			description: "NULL"
		},
		init: (w) => { },
		content: `<p>NULL</p>`
	},
	"startmenu": {
		title: "START",
		meta: {
			author: "Minin Productions",
			description: "Start Menu"
		},
		init: (win) => { let w = win.window; w.classList.add("start"); },
		content: ``
	}
}
