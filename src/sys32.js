new Promise((result, reject) => {
	result(true);
}).then((res, err) => {
	document.getElementById("preloader").remove();
});
