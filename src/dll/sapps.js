dll.hdd.fs.root.lib["cmd.dll"] = {
	_type: "file",
	init: (w) => {
		if (Object.keys(dll.cmd.commands).length == 0) {
			dll.cmd.commands.echo = new dll.cmd.Command((args) => { return args.join(" "); }, "Prints user specified text to output");
			dll.cmd.commands.clear = new dll.cmd.Command((args) => { history.innerHTML = "" }, "Clears output");
			dll.cmd.commands.help = new dll.cmd.Command((args) => {
				let output = "";
			
				Object.keys(dll.cmd.commands).forEach((command) => {
					output += `${command}: ${dll.cmd.commands[command].description}</p><p>`;
				});
			
				return output;
			}, "List commands or display help for a command");
			dll.cmd.commands.ls = dll.cmd.commands.dir = new dll.cmd.Command((args) => {
				let output = "";
				let count = 0;
			
				Object.keys(man.current).forEach((item) => {
					if (!item.startsWith("_")) {
						let type = man.current[item]["_type"].toUpperCase();
						output += `${type} ${item}</p><p>`;
						count++;
					}
				});

				output += `${count} items`;
			
				return output;
			}, "List all files and folders in current directory");
			dll.cmd.commands.cat = new dll.cmd.Command((args) => {
				if (args[0] == undefined) return "cat: Enter a file name";

				let path = args.join(" ");
			
				if (man.current[path] != undefined) {
					if (man.current[path]["_type"] == "file") {
						return man.current[path].content ? man.current[path].content : man.current[path];
					} else {
						return "cat: Path is not a file";
					}
				} else {
					return "cat: Invalid file path"
				}
			}, "Read the contents of a file");
			dll.cmd.commands.cd = new dll.cmd.Command((args) => {
				if (args[0] == undefined) return "cd: Enter a directory";

				if (Object.keys(man.current).includes(args[0]) || args[0] == ".." || args[0] == "/") {
					if (args[0] == "/") return man.cdlist(["root"]);
					man.cd(args[0]);
				} else {
					return "cd: Invalid directory path";
				}

				path.innerText = `${man.loc.join("/")} $`;
			}, "Change directory, use '..' to go up");
		}

		let man = new dll.hdd.manager();

		let wrapper = document.createElement("div");
		let container = document.createElement("div");

		let history = document.createElement("div"); history.innerHTML = "<p>ODD Command Prompt</p><br>";

		let inf = document.createElement("form");
		let path = document.createElement("label");
		let inp = document.createElement("input");

		{
			container.classList.add("control", "f", "flex");

			history.classList.add("control", "cm0")

			wrapper.style.padding = "1em";
			wrapper.style.flex = "1";
			wrapper.style.backgroundColor =
			w.window.style.backgroundColor = "#111";
			wrapper.style.color = "#ddd";
			wrapper.style.fontFamily = "FiraMono";
			wrapper.style.cursor = "text";

			inf.classList.add("control", "flex", "fw");
			inp.classList.add("control", "f1");

			inp.style.marginLeft = "0.5em";
			inp.style.backgroundColor = "transparent";
			inp.style.color = "#ddd";
			inp.style.border = inp.style.outline = "none";
			inp.style.fontFamily = "FiraMono";

			path.style.fontFamily = "FiraMono";
			path.style.cursor = "text";
			path.innerHTML = "root $";
		}

		{
			wrapper.onclick = () => inp.focus();
			inf.onsubmit = () => { return false };

			inp.onkeydown = (e) => {
				if (e.keyCode == 13) {
					let args = inp.value.split(" ");
					let command = args.shift().toLowerCase();
					let output = "";

					history.innerHTML += `<p>${path.innerText} ${inp.value}</p>`;

					inp.value = "";

					if (Object.keys(dll.cmd.commands).includes(command)) {
						try {
							output = dll.cmd.commands[command].Call("command", args);
	
							if (output == undefined) output = "";
						} catch (e) {
							output = `${command}: INTERNAL ERROR: ${e}`;
						}
					} else {
						output = `Invalid command "${command}" specified.`;
					}

					path.innerText = `${man.loc.join("/")} $`;

					history.innerHTML += `<p>${output}</p><br>`;

					w.content.scroll(0, history.clientHeight + inf.clientHeight + (16 * 2));
				}
			}
		}

		{
			inf.appendChild(path);
			inf.appendChild(inp);
			
			wrapper.appendChild(history);
			wrapper.appendChild(inf);

			container.appendChild(wrapper);

			w.content.appendChild(container);
		}

		inp.focus();
	},
	Command: class {
		constructor(action = (args) => {}, description = "null") {
			this.description = description;
	
			this.ev = {};
			this.ev.command = action;
		}
	
		Call(event, scope) {
			switch (event) {
				case "command":
					return this.ev.command(scope);
					break;
	
				default:
					// error
			}
		}
	},
	commands: {}
}

dll.hdd.fs.root.lib["openw.dll"] = {
	_type: "file",
	init: (w) => {
		w.window.style.width = "42vw";
		w.window.style.height = "56vh";

		w.window.attributes.style.nodeValue += " top: calc(50vh - 28vh) !important;";
		w.window.attributes.style.nodeValue += " left: calc(50vw - 21vw) !important;";

		let container = document.createElement("div");
		
		let wrapper = document.createElement("div");

		let filename = document.createElement("h1");
		let subtitle = document.createElement("p");
		let divider = document.createElement("div"); 
		let apps = document.createElement("div");

		{
			wrapper.appendChild(filename);
			wrapper.appendChild(subtitle);
			wrapper.appendChild(divider);
			wrapper.appendChild(apps);

			container.appendChild(wrapper);

			w.content.appendChild(container);
		}

		{
			w.window.style.backdropFilter = "brightness(0.2) blur(0.5em)";
			w.window.style.resize = "none";
			w.window.style.boxShadow = "none";

			w.titlebar.style.display = "none";

			w.content.style.height = "100%";
			w.content.style.color = "var(--textColor)";
			w.content.style.background =
			w.window.style.background = "transparent";

			container.classList.add("control", "f", "flex");

			wrapper.style.padding = "1em";
			wrapper.style.flex = "1";
			wrapper.style.display = "flex";
			wrapper.style.flexDirection = "column";
			wrapper.style.alignItems = "center";

			filename.style.marginBottom = "0";

			filename.innerText = w.args[w.args.length - 1];
			subtitle.innerText = "select an app to open this file;";

			divider.classList.add("control", "divider");
		}

		{
			Object.keys(dll.openw.oapps).forEach((app) => {
				let item = document.createElement("h1");
				item.innerText = app;

				apps.appendChild(item);
			});
		}
	},
	oapps: {}
}
