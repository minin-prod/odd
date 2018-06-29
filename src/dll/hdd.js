dll.hdd = {};

dll.hdd.fs = {
	"root": {
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
			type: "dir"
		}
	}
}

dll.hdd.util = {
	"isRoot": (loc) => { if (loc.length == 1 && loc[0] == "root") { return true } else { return false } },
	"isEmpty": (loc) => { if (loc.length == 0) { return true } ekse { return false } }
}