//create new obj based on user input
var friend = require("../data/friend");


function totalScore(newObj) {

	for (var i = 0; i < friend.length; i) {

		var friendData = friend[i].scores

		for (var j = 0; j < friendData.length; j++){

			var total = Math.abs(newObj.scores[j] - friendData[j]);

		}
	}


};


$("#submit").on("click", function(event) {
	event.preventDefault();
	var newObj = {
		name: $("#name").val().trim(),
		photo: $("#photoLink").val().trim(),
		scores: [parseInt($("#question1").val()), parseInt($("#question2").val()),parseInt($("#question3").val()),parseInt($("#question4").val()),parseInt($("#question5").val()), parseInt($("#question6").val()),parseInt($("#question7").val()),parseInt($("#question8").val()),parseInt($("#question9").val()),parseInt($("#question10").val()) ]
	};
	totalScore(newObj);

	$.post("/api/friends", newObj, function(data) {
		console.log(data + "AHH!!!");
	})
})

