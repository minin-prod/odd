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
		init: () => { /* initialize */ },
		content: `NULL`
	},
	"startmenu": {
		title: "",
		shortcuts: false,
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
		init: () => { /* initialize */ },
		shortcuts: false,
		content: ``
	},
	"about": {
		title: "About",
		meta: {
			author: "Minin Productions",
			description: "About your ODD workspace"
		},
		init: () => { /* initialize */ },
		content: `<div class="control flex f v">
			<div class="control flex f125 bc">
				<div class="logo"></div>
			</div>
			<div class="control flex f1">
				<div class="control flex f1 v tr">
					<p>Code</p>
					<p>Icons</p>
					<p>Inspiration</p>
				</div>
				<div class="control w06"></div>
				<div class="control flex f1 v tl">
					<a class="control link" target="_blank" href="https://github.com/mininp">Minin Productions</a>
					<a class="control link" target="_blank" href="https://icons8.com/">Icons8</a>
					<a class="control link" target="_blank" href="https://www.os-js.org/">os.js</a>
				</div>
			</div>
		</div>`
	},
	"openwith": {
		title: "Open With",
		meta: {
			author: "Minin Productions",
			description: "'Open With' Dialog"
		},
		shortcuts: false,
		init: (w) => { dll.lib.get("openw.dll"); dll.openw.init(w) },
		content: ``
	}
}
