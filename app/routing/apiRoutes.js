var friend = require("../data/friend");



module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friend);
    });


    app.post("/api/friends", function(req, res) {
        var userInput = req.body;
        var userScore = userInput.scores


        console.log(userInput);

        var bestMatch = 100;
        var index = -1;
        var total = 0;


        for (var i = 0; i < friend.length; i++) {
            total = 0;

            var selectedFriend = friend[i].scores

            for (var j = 0; j < userScore.length; j++) {

                var dif = Math.abs(userScore[j] - selectedFriend[j]);

                total += dif

            };
            if (total < bestMatch) {
                bestMatch = total;
                index = i;
            }
        }

        console.log(index)
        console.log(bestMatch)
		friend.push(userInput);
		res.json(friend[index]);
    });

};
