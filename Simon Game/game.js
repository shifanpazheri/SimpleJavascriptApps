var userClickedPattern=[]
var gamePattern=[]
var buttonColours = ["red", "blue", "green", "yellow"];
var level=0;
var gameStart = false;

function nextSequence(){
    userClickedPattern=[]
    level = level+1;
    $("h1").html("Level "+level.toString());
    randomNumber=Math.floor(4*Math.random());
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    console.log("gamePattern--->"+gamePattern);
    playSound(randomChosenColour);
}

$(".btn").on("click",handler);

function handler(event){
  userChosenColour = event.currentTarget.id;
  userClickedPattern.push(userChosenColour);
  console.log("userClickedPattern--->"+userClickedPattern);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
}

function playSound(color){
  var audio = new Audio('sounds/'+color+'.mp3');
  audio.play();
}

function animatePress(currentColour){
  $("."+currentColour).addClass("pressed");
  const myTimeout = setTimeout(function(){
    $("."+currentColour).removeClass("pressed");
  }, 100);
}

  $(document).keypress(function(){
    if(gameStart===false)
    {
      gameStart = true;
      nextSequence();
    }
  });

  function checkAnswer(currentLevel){
    console.log("currentLevel--->"+currentLevel);
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
      console.log("Sucess");
      if(currentLevel==level-1){
          const myTimeout = setTimeout(nextSequence,1000);
      }
    }
    else{
      console.log("Wrong");
      playSound("wrong");
      $("body").addClass("game-over");
      const myTimeout = setTimeout(function(){
        $("body").removeClass("game-over");
      }, 200);
      $("h1").html("Game Over, Press Any Key to Restart");
      startOver();
    }
  }

  function startOver(){
    level=0;
    gamePattern=[];
    gameStart = false;
  }
