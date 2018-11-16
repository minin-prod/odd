dll.events = {};

dll.events.log = {};

dll.events.severityLevels = {
	"info": 0,
	"warning": 1,
	"error": 2,
	"crash": 3
}

dll.events.severityNames = [
	"info",
	"warning",
	"error",
	"crash"
]

dll.events.report = (type, content, source) => {
	dll.events.log[Date.now().toString()] = {
		name: content,
		severity: dll.events.severityNames[type],
		severityId: type,
		source: source ? source : document.body,
		timestamp: utilGETTIME()
	}
}

function log(text, source) {
	let severity = dll.events.severityLevels;
	dll.events.report(severity.info, text, source);
	console.log(text);
}

function warn(text, source) {
	let severity = dll.events.severityLevels;
	dll.events.report(severity.warning, text, source);
	console.warn(text);
}

function error(text, crash, source) {
	let severity = dll.events.severityLevels;
	dll.events.report(crash ? severity.crash : severity.error, text, source);
	console.error(text);
}

function utilGETTIME() {
	let t = new Date();

	let h = t.getHours();
	let m = t.getMinutes();

	return `${h.toString().length == 1 ? "0" + h : h}:${m.toString().length == 1 ? "0" + m : m}`;
}
