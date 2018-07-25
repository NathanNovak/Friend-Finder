// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

var friendsData = require("../friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	//Routes that go the the JSON files
	// HTML GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get("/api/friends", function (req, res) {
		console.log(req.params);
		res.json(friendsData);
		// console.log(res);
	});

	app.post("/api/friends", function (req, res) {
		// req.body hosts is equal to the JSON post sent from the user
		// This works because of our body-parser middleware
		var newFriend = req.body;
		console.log(newFriend.questions);
		var scores = Object.values(newFriend.questions);
		console.log(scores);
		// Using a RegEx Pattern to remove spaces from newFriend
		// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
		// newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();


		friendsData.push(newFriend);
		console.log("FriendsData:", friendsData);
		res.json(newFriend);
	});

};