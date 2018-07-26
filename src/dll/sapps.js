dll.hdd.fs.root.lib["cmd.dll"] = {
	_type: "file",
	init: (w) => {
		if (Object.keys(dll.cmd.commands).length == 0) {
			dll.cmd.commands.echo = new dll.cmd.Command((args) => { return args.join(" "); });
		}

		let man = new dll.hdd.manager();

		let wrapper = document.createElement("div");
		let container = document.createElement("div");

		let history = document.createElement("div"); history.innerHTML = "<br>";

		let inf = document.createElement("form");
		let path = document.createElement("label");
		let inp = document.createElement("input");

		{
			container.classList.add("control", "f", "flex");

			history.classList.add("control", "cm0")

			wrapper.style.padding = "1em";
			wrapper.style.flex = "1";
			wrapper.style.backgroundColor = w.window.style.backgroundColor = "#111";
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
			path.innerHTML = "root/ $";
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
						output = dll.cmd.commands[command].Call("command", args);

						if (output == undefined) output = "";
					} else {
						output = `Invalid command "${command}" specified.`;
					}

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
