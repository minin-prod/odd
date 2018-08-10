dll.app = {};

dll.app.apps = {
	"0": "nullapp",
	"1": "startmenu",
	"2": "explorer",
	"3": "settings",
	"4": "contextmenu",
	"5": "about",
	"6": "openwith"
}

dll.app.appdata = {
	"nullapp": {
		title: "NULL",
		meta: {
			author: "Minin Productions",
			description: "NULL"
		},
		init: undefined,
		content: `NULL`
	},
	"startmenu": {
		title: "",
		init: undefined,
		init: (w) => { w.shortcuts = false; },
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
		init: undefined,
		content: ``
	},
	"about": {
		title: "About",
		meta: {
			author: "Minin Productions",
			description: "About your ODD workspace"
		},
		init: undefined,
		content: `<center><a href="https://icons8.com">Icon pack by Icons8</a></center>`
	},
	"openwith": {
		title: "Open With",
		meta: {
			author: "Minin Productions",
			description: "Open With Dialog"
		},
		init: (w) => { dll.lib.get("openw.dll"); dll.openw.init(w) },
		content: ``
	}
}
