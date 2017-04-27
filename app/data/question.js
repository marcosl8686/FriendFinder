//number of items in the dropdown menu
var numb = 5;


//list of question for the survey
var questions = [ {
	title: "Question 1",
	question: "Your mind is always buzzing with unexplored ideas and plans."
},
{
	title: "Question 2",
	question: "Generally speaking, you rely more on your experience than your imagination."
},
{
	title: "Question 3",
	question: "You find it easy to stay relaxed and focused even when there is some pressure."
},
{
	title: "Question 4",
	question: "You rarely do something just out of sheer curiosity."
},
{
	title: "Question 5",
	question: "People can rarely upset you."
},
{
	title: "Question 6",
	question: "It is often difficult for you to relate to other people’s feelings."
},
{
	title: "Question 7",
	question: "In a discussion, truth should be more important than people’s sensitivitie"
},
{
	title: "Question 8",
	question: "You rarely get carried away by fantasies and ideas."
},
{
	title: "Question 9",
	question: "You think that everyone’s views should be respected regardless of whether they are supported by facts or not."
},
{
	title: "Question 10",
	question: "You feel more energetic after spending time with a group of people."
}];

//creates dropdamn menu list
function dropMenu(target) {
	var option;
	for (var i = 1; i <= numb; i++) {
		if (i === 1) {
			 option = $("<option value='" + i + "'>" + i + " Strongly Disagree</option>");
		}
		else if (i === 5) {
			 option = $("<option value='" + i + "'>" + i + " Strongly Agree</option>");
		}
		else {
			 option = $("<option value='" + i + "'>" + i + "</option>");
		}
		target.append(option);
	}
}


//displays questions to HTML page
function questionCreator() {

	var container = $("<div class='form-group'></div>");

	for (var i = 0; i <= questions.length; i++) {
		var dropMenuCont = $("<select id='question" + (i + 1)+ "'></select>");
		var title = $("<h3>" + questions[i].title + "</h3>");
		var question = $("<p>" + questions[i].question + "</p>");
		dropMenu(dropMenuCont);
		container.append(title);
		container.append(question);
		container.append(dropMenuCont)
		$("#questions").append(container);

	}
}

questionCreator();