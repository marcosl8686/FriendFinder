

$("#submit").on("click", function(event) {
	event.preventDefault();
	var newObj = {
		name: $("#name").val().trim(),
		photo: $("#photoLink").val().trim(),
		scores: [parseInt($("#question1").val()), parseInt($("#question2").val()),parseInt($("#question3").val()),parseInt($("#question4").val()),parseInt($("#question5").val()), parseInt($("#question6").val()),parseInt($("#question7").val()),parseInt($("#question8").val()),parseInt($("#question9").val()),parseInt($("#question10").val()) ]
	};
	console.log(newObj);
	$.post("/api/friends", newObj, function(data) {
		if (data) {
			console.log(data);
			$('#name').text(data.name);
            $('#img').attr('src', data.photo );
            $('#imagemodal').modal('show');

		}

	})

	$("#name").val("");
	$("#photoLink").val("");
})

