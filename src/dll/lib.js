dll.lib = {};

dll.lib.get = (libname) => {
	let lib = libname.split("."); lib.pop(); lib = lib.join(".");
	let dllfile = dll.hdd.fs.root.lib[libname];

	if (dllfile) {
		if (typeof dllfile == "object") {
			if (dll[lib]) {
				console.log(`Library ${lib} is already defined, and will not be rewritten`)
			} else {
				dll[lib] = {};
				Object.keys(dllfile).forEach((v) => { if (!v.startsWith("_")) dll[lib][v] = dllfile[v] });
			}
		} else {
			throw new Error(`Library '${libname}' is not an object`);
		}
	} else {
		throw new Error(`Cannot find library '${libname}'`);
	}
}
