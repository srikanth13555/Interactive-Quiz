var questions = [{
    questions: "What is the Name of Present Indaia's President ?",
    choices:["Ram Nad Kovindh", "Prathiba Patel", "Pranab Mukerji", "Narendra Modi"],
    correctAnswer:1
},{
    questions: "What is the Name of Present Indaia's Prime Minister ?",
    choices:["Man Mohan Singh", "Jawarlal Nehru", "Narendra Modi", "Atal Bhihari Vajbahi"],
    correctAnswer:3 
},{
    questions: "What is the Name of National Bird ?",
    choices:["Parrot", "Peacock", "Sparrow", "Pigeon"],
    correctAnswer:2
},{
    questions: "What is the Name of National Animal ?",
    choices:["Loin", "Tiger", "Elephant", "Fox"],
    correctAnswer:2
},{
    questions: "What is the Mother Toung of Telangana  ?",
    choices:["Tamil", "Hindi", "Malayalam", "Telugu"],
    correctAnswer:4
},{
    questions: "What is the Mother Toung of Andra Pradesh ?",
    choices:["Tamil", "Hindi", "Malayalam", "Telugu"],
    correctAnswer:4
},{
    questions: "What is the National Antham Of India ?",
    choices:["Vande Matharam", "Jaya Jayahe Telangana", "Jana Gana Mana", "Sare jahase Acha"],
    correctAnswer:3
},{
    questions: "What is the National Game Of India  ?",
    choices:["Football", "Basket Ball", "Cricket", "Hockey"],
    correctAnswer:4
},{
    questions: "What is the Name of present Chief Minister of Telangana ?",
    choices:["YSR", "KCR", "Chandra Babu Naidu", "Roshaiah"],
    correctAnswer:2
},{
    questions: "What is the Name of present Chief Minister of Andhra Pradesh ?",
    choices:["Dr.YSR", "Chandra Babu Naidu", "YS Jagan Mohan Reddy", "Roshaiah"],
    correctAnswer:3
}
];
var currentQuestion = 0;
var correntAnswer = 0;
var quizOver = false;
$(document).ready(function () {
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click", function() {
        if(!quizOver){
            value = $("input[type='radio']:checked").val();
            if (value == underfined) {
                $(document).find(",quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            }else {
                $(document).find(".quidMessage").hide();
                if (value == questions[currentQuestion].correctAnswer){
                    correctAnswer++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length){
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
}); 
function displayCurrentQuestion() {
    console.log("In display current Question");
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choicList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set thenquestionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}
function resetQuiz() {
    currentQuestion = 0;
    correntAnswer = 0;
    hideScore();
}
function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored:" + correntAnswer + "out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}
function hideScore() {

    $(document).find(".result").hide();

}
