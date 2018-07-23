dll.app = {};

dll.app.apps = {
	"0": "nullapp",
	"1": "startmenu",
	"2": "explorer",
	"3": "settings",
	"4": "contextmenu"
}

dll.app.appdata = {
	"nullapp": {
		title: "NULL",
		meta: {
			author: "Minin Productions",
			description: "NULL"
		},
		init: (w) => { },
		content: `NULL`
	},
	"startmenu": {
		title: "START",
		meta: {
			author: "Minin Productions",
			description: "Start Menu"
		},
		init: (w) => { },
		content: ``
	},
	"explorer": {
		title: "File Explorer",
		meta: {
			author: "Minin Productions",
			description: "File Explorer"
		},
		init: (w) => { dll.explorer.init(w) },
		content: ``
	},
	"settings": {
		title: "Settings",
		meta: {
			author: "Minin Productions",
			description: "Configure your ODD workspace"
		},
		init: (w) => { w.args.push("settings"); w.args.push(w.args.shift()); dll.explorer.init(w) },
		content: ``
	},
	"contextmenu": {
		title: "",
		init: (w) => { },
		content: ``
	}
}
