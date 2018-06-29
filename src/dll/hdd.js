dll.hdd = {};

dll.hdd.fs = {
	"root": {
		type: "dir",
		"root": {
			type: "dir"
		},
		"log": {
			type: "dir"
		},
		"bin": {
			type: "dir"
		},
		"lib": {
			type: "dir"
		},
		"usr": {
			type: "dir"
		},
		"home": {
			type: "dir",
			"libraries": {
				type: "dir",
				"Productivity": {
					type: "dir"
				},
				"Programming": {
					type: "dir"
				},
				"Tools": {
					type: "dir"
				},
				"Games": {
					type: "dir"
				}
			}
		}
	}
}

dll.hdd.util = {
	"isRoot": (loc) => { if (loc.length == 1 && loc[0] == "root") { return true } else { return false } },
	"isEmpty": (loc) => { if (loc.length == 0) { return true } else { return false } }
}

dll.hdd.manager = class Manager {
	constructor() {
		this.loc = ["root"];
		this.current = dll.hdd.fs["root"];
	}

	cd(dir) {
		if (dir == "..") {
			let removed = this.loc.pop();

			if (dll.hdd.util.isEmpty(this.loc)) {
				this.loc.push(removed);
			} else {
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
			if (dir == "..") {
				if (!dll.hdd.util.isEmpty(this.loc.pop()))
					this.loc.pop();
			} else {
				this.loc.push(dir);
			}
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

			if (this.current.type != "dir") {
				this.loc.pop();
			} else {
				x = false;
			}
		} while (x)
	}
}