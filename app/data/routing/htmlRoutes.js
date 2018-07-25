// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

var path = require("path");


module.exports = function (app) {

	//Routes to survey.html and a default rout to home.html

	app.get("/survey", function (req, res) {
		res.sendFile(path.join(__dirname, "/../../public/survey.html"));
	});

	app.use(function (req, res) {
		res.sendFile(path.join(__dirname, "/../../public/home.html"));
	});

};






