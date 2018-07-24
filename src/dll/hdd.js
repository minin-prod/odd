dll.hdd = {};

dll.hdd.fs = {
	"root": {
		_type: "dir",
		"root": {
			_type: "dir"
		},
		"log": {
			_type: "dir"
		},
		"bin": {
			_type: "dir",
			"cmd.exe": {
				_type: "file",
				_pseudoname: "Programming",
				appdata: {
					title: "Command Prompt",
					meta: {
						author: "Minin Productions",
						description: "Command prompt utility"
					},
					init: (w) => { dll.cmd.init(w) },
					content: ``
				}
			}
		},
		"lib": {
			_type: "dir"
		},
		"usr": {
			_type: "dir"
		},
		"home": {
			_type: "dir",
			"libraries": {
				_type: "dir",
				"Productivity": {
					_type: "dir",
					_pseudo: "Productivity",
					_pseudolocation: ["root", "bin"]
				},
				"Programming": {
					_type: "dir",
					_pseudo: "Programming",
					_pseudolocation: ["root", "bin"]
				},
				"Tools": {
					_type: "dir",
					_pseudo: "Tools",
					_pseudolocation: ["root", "bin"]
				},
				"Games": {
					_type: "dir",
					_pseudo: "Games",
					_pseudolocation: ["root", "bin"]
				}
			}
		}
	},
	"settings": {
		_type: "dir",
		"time": {
			_type: "dir"
		}
	}
}

dll.hdd.util = {
	"isRoot": (loc) => { if (loc.length == 1 && (loc[0] == "root" || loc[0] == "settings")) { return true } else { return false } },
	"isEmpty": (loc) => { if (loc.length == 0) { return true } else { return false } }
}

dll.hdd.manager = class {
	constructor() {
		this.loc = ["root"];
		this.current = dll.hdd.fs["root"];
	}

	cd(dir) {
		if (dir == "..") {
			if (this.loc.length > 1) {
				this.loc.pop();
			}
		} else {
			this.loc.push(dir);
		}

		this.update();
	}

	cdlist(navto) {
		this.loc = [];

		navto.forEach((dir) => {
			this.loc.push(dir);
		});

		this.update();
	}

	update() {
		let x = true;
		do {
			this.current = dll.hdd.fs;
			this.loc.forEach((dir) => {
				this.current = this.current[dir];
			});

			if (this.current["_type"] != "dir") {
				this.loc.pop();
			} else {
				x = false;
			}
		} while (x)
	}
}