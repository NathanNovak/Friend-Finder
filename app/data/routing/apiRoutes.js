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
	});

	app.post("/api/friends", function (req, res) {

		
		// req.body hosts is equal to the JSON post sent from the user
		// This works because of our body-parser middleware
		var newFriend = req.body;
		questionAnswers = newFriend.questions;

		// console.log(newFriend.name);
		// console.log(questionAnswers);
		// var scores = Object.values(newFriend.questions);
		
		friendsData.push(newFriend);
		 //get all the friends in the list 
		for (var i = 0; i < friendsData.length; i++){
			var score = 0;
			// console.log(friendsData[i].questions);
			for(var j = 0; j < friendsData[i].questions.length; j++){
				console.log("FRIENDSDATA:", friendsData[i].questions[j]);
				console.log("USERENTRY:", questionAnswers[j]);
			}
			// console.log("Score",score);
		}
		
		// console.log("FriendsData:", friendsData);
		res.json(newFriend);
	});

};