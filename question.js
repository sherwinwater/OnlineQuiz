var option1 = document.getElementById("option1");
var title_p = document.getElementById("title_p");
var option1_label = document.getElementById("option1_label");
var option2_label = document.getElementById("option2_label");
var option3_label = document.getElementById("option3_label");
var option4_label = document.getElementById("option4_label");
var input_radio = document.querySelectorAll("input");
var input_label = document.querySelectorAll("label");
var question_result_p = document.getElementById("question_result");
var question_id_span = document.getElementById("question_id");
var question_div = document.getElementById("question");

// declare question variables
var question_title = [
  "How many moons does Mars has?",
  "What's Mars's nickname?",
  "About how long would it take to travel to Mars?",
  "Mars is the _____th planet from the sun?",
  "What color is the Martian sky during the day?"
];
var question1_options = ["1", "2", "4", "8"];
var question2_options = [
  "The red planet",
  "The dusty planet",
  "The hot planet",
  "The smelly planet"
];
var question3_options = ["3 days", "1 month", "8 months", "2 years"];
var question4_options = ["2", "3", "4", "6"];
var question5_options = ["yellowish", "red", "blue", "purple"];
var question_list = [
  question_title,
  question1_options,
  question2_options,
  question3_options,
  question4_options,
  question5_options
];
var answers = ["2", "The red planet", "8 months", "4", "yellowish"];
var score = 0;
var score_p = document.getElementById("score");
score_p.innerHTML = score;

// compare answer
function submitQuestion() {
  let correctAns = "<p>correct!</p>";
  let wrongAns = "<p>nice try!</p>";
  switch (question_id) {
    case 1:
      let q1 = "<p>Mars has two moons named Phobos and Deimos</p>";
      compareAnswer(correctAns + q1, wrongAns + q1);
      break;
    case 2:
      let q2 =
        "<p>Rusted iron particles in Mars' rocks give the planet a red hue</p>";
      compareAnswer(correctAns + q2, wrongAns + q2);
      break;
    case 3:
      let q3 =
        "<p>Mars and Earth follow different orbits around the sun,so space must wait until they are close together to blast off. It will take 8 months</p>";
      compareAnswer(correctAns + q3, wrongAns + q3);
      break;
    case 4:
      let q4 =
        "<p>Mars is the fourth planet after Mercury, Venus, and Earth</p>";
      compareAnswer(correctAns + q4, wrongAns + q4);
      break;
    case 5:
      let q5 =
        "<p>Mars is the fourth planet after Mercury, Venus, and Earth</p>";
      compareAnswer(correctAns + q5, wrongAns + q5);
      break;
  }
}

// submit question and check answer with score
function compareAnswer(correctAnswer, wrongAnswer) {
  for (var i = 0; i < input_radio.length; i++) {
    var isChecked = false;
    if (input_radio[i].checked) {
      isChecked = true;
      if (input_label[i].textContent == answers[question_id - 1]) {
        console.log("right");
        question_result_p.innerHTML = correctAnswer;
        score_p.innerHTML = ++score;
      } else question_result_p.innerHTML = wrongAnswer;
      input_radio[i].checked = false;
      nextQuestion();
      break;
    }
  }
  if (!isChecked) alert("please choose one option before next.");
}

// next question
var question_id = 0;
function nextQuestion() {
  if (question_id < question_list.length - 1) {
    title_p.innerHTML = question_list[0][question_id];
    option1_label.textContent = question_list[question_id + 1][0];
    option2_label.textContent = question_list[question_id + 1][1];
    option3_label.textContent = question_list[question_id + 1][2];
    option4_label.textContent = question_list[question_id + 1][3];
    question_id_span.innerHTML = ++question_id;
  } else {
    // question_id = 1;
    question_div.style.display = "none";
    question_result_p.innerHTML = "";

    setTimeout(() => {
      if (confirm("Your score is " + score + ". Do you like new game?")) {
        newGame();
      } else {
        document.getElementById("start_game").style.display = "block";
        // document.getElementById("score_div").style.display = "block";
      }
    }, 1500);
  }
}

//load question in starting page
function loadQuestion() {
  title_p.innerHTML = question_title[0];
  option1_label.textContent = question1_options[0];
  option2_label.textContent = question1_options[1];
  option3_label.textContent = question1_options[2];
  option4_label.textContent = question1_options[3];
  question_id_span.innerHTML = 1;
  question_id = 1;
}

// get hint
function getHint(i) {
  hint = document.getElementById("hint");
  switch (i) {
    case 1:
      hint.innerHTML =
        "please choose only one best answer from the following options";
      break;
    case 2:
      hint.innerHTML = "click Next, if you like to proceed.";
      break;
    case 3:
      hint.innerHTML = "click New Game, if you like to start a new game.";
      break;
    case 4:
      hint.innerHTML = "your final score.";
      break;
  }
  setTimeout(() => {
    hint.innerHTML = "";
  }, 1000);
}

// new game
function newGame() {
  question_div.style.display = "block";
  document.getElementById("score_div").style.display = "block";
  document.getElementById("start_game").style.display = "none";
  loadQuestion();
  question_result_p.innerHTML = "";
  score = 0;
  score_p.innerHTML = score;
}
