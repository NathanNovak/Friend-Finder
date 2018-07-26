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
		// var questionValues = Object.values(questionAnswers);
	
		// console.log(newFriend.name);
		// console.log("NEW FRIEND:", questionAnswers);
		// var scores = Object.values(newFriend.questions);
		
		//get all the friends in the list 
		for (var i = 0; i < friendsData.length; i++){
			var score = 0;
			console.log("Name:", friendsData[i].name);
			console.log("Friends list:", friendsData[i].questions);

			//gets the absolute value of the difference between each index of the POST array and the existing arrays
			for(var j = 0; j < friendsData[i].questions.length; j++){
				
				console.log("ABS Value of post & Arr:", Math.abs(friendsData[i].questions[j] - questionAnswers[j]));
				console.log("----------------");
				// console.log("USERENTRY:", questionAnswers[j]);
			}
			// console.log("Score",score);
		}
		
		//newFriend gets pushed to the friendsArr friends.js after it is compared with the existing friend in arr.
		friendsData.push(newFriend);
		console.log("Data Pushed:", friendsData);
		res.json(newFriend);
	});

};