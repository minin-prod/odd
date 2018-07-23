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
			_type: "dir"
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
					_type: "dir"
				},
				"Programming": {
					_type: "dir"
				},
				"Tools": {
					_type: "dir"
				},
				"Games": {
					_type: "dir"
				}
			}
		}
	},
	"settings": {
		__type: "dir"
	}
}

dll.hdd.util = {
	"isRoot": (loc) => { if (loc.length == 1 && loc[0] == "root") { return true } else { return false } },
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