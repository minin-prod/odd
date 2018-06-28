dll.app = {};

dll.app.apps = {
	"0": "nullapp",
	"1": "startmenu",
	"2": "explorer"
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
		title: "File Exploerer",
		meta: {
			author: "Minin Productions",
			description: "File Explorer"
		},
		init: (w) => { },
		content: ``
	}
}
