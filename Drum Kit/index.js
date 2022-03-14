
for (var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    value=this.innerHTML;
    addButtonAnimation(value);
    switch (value) {
      case "w":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case "a":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      case "s":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case "d":
        var tom1 = new Audio('sounds/tom1.mp3');
        tom1.play();
        break;
      case "j":
        var tom2 = new Audio('sounds/tom2.mp3');
        tom2.play();
        break;
      case "k":
        var tom3 = new Audio('sounds/tom3.mp3');
        tom3.play();
        break;
      case "l":
        var tom4 = new Audio('sounds/tom4.mp3');
        tom4.play();
        break;
    }
  });
}

document.addEventListener("keydown",function(event){
  value=event.key;
  addButtonAnimation(value);
  switch (value) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "d":
      var tom1 = new Audio('sounds/tom1.mp3');
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio('sounds/tom2.mp3');
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio('sounds/tom3.mp3');
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio('sounds/tom4.mp3');
      tom4.play();
      break;
  }
})

function addButtonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");}, 200);
}
