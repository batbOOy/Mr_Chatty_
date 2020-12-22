playSound("assets/01-Track-1.mp3", true);
var lastList = ["answer"];
var answerList = [
  "that's cool", 
  "super cool.", 
  "I like that.",
  "Neat.",
  "I dunno about that.",
  "thats the coolest Im so cold.",
  "super duper cool.",
  "no way",
  "that's awesome.",
  "I'm not sure",
  "mabey",
  "so cool that Its winter now.",
  "cool well now its cold ):",
  "are you really sure tho",
  "um",
  "wow thats cool",
  "3171712/cool",
  "super duper really cool",
  "Im amazed.",
  ];
var questionList = [
  "are you human or fish?", 
  "Am i a game?", 
  "what are you doing?", 
  "how are you today?", 
  "do you have hobbies?",
  "whats your favourite sport?",
  "what your favourite car?",
  "whos your favorite entertainer?",
  "whats your favourite food?",
  "whats your favourite number?",
  "whats your favourite game?",
  "whats your favourite instrument?",
  "whats your favourite animal?",
  "whats your name?",
  "whats your favourite icecream flavour?",
  "who are you really?",
  "do you have siblings?",
  "do you like coding?",
  "am I your friend?"

];

textInput("chatInput", "");
textLabel("chatLabel", "Chat");

button("forward", "Continue");
setPosition("forward", 110, 400, 100, 50);
setPosition("chatInput", 20, 360, 280, 30);
setPosition("chatLabel", 10, 340, 100, 100);


onEvent("forward", "click", function(event) {
  
  var chatInput = getText("chatInput");
  var picker;
  setText("chatInput", "");
  lastListIndex = lastList.length - 1;
  if (lastList[lastListIndex] !== 'answer') {
    picker = randomNumber(0, answerList.length - 1);
    screenClick(chatInput);
    setTimeout(function() {
      screenClick(answerList[picker]);
      removeItem(answerList, picker);
      appendItem(lastList, "answer");
    }, 1000);
  } else {
    picker = randomNumber(0, questionList.length - 1);
    screenClick(chatInput);
    setTimeout(function() {
      screenClick(questionList[picker]);
      removeItem(questionList, picker);
      appendItem(lastList, "question");
    }, 1000);
  }
});

function screenClick(myString) {
  write(myString);
}