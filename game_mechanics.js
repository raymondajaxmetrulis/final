var images = document.getElementById("images");
var text = document.getElementById("text");
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');
var reality;


input.onkeypress = function(start) {
  if (start.key == "Enter" || start.keyCode == 13) {
    reality = input.value;
    input.parentNode.removeChild(input);
    lvlUp(altReality.two);
    $("h1").fadeIn(3000);
  }
};


var altText = function(words) {
  text.innerHTML = words.replace("The void", reality);
};

var altProjections = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
};

var altConvictions = function(buttonList) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  }
};

var lvlUp = function(s) {
  altProjections(s.image)
  altText(s.text)
  altConvictions(s.buttons)
};


altReality = {}
var altReality = {

  one: {  
    text: "Give your reality a name, then press Enter\n",  
  },

  two: {
    image: "images/dark.jpg",
    text: "The void breaths its first breath. The formless landscape before you awaits input. It is cold and dark.",
    buttons: [["Divide what is and what is not","lvlUp(altReality.three)"],["Leave", "lvlUp(altReality.twoB)"],["Bask", "lvlUp(altReality.twoC)"],["Embrace madness", "lvlUp(altReality.zero)"]]
  },

   twoB: {
    image: "images/dark.jpg",
    text: "You decide to head somewhere with better ambiance, but trip over the formless landscape and fall directly on your face. Thankfully, the surrounding oblivion broke your fall.",
    buttons: [["Divide what is and what is not","lvlUp(altReality.three)"],["Bask", "lvlUp(altReality.twoC)"],["Embrace madness", "lvlUp(altReality.zero)"]]
  },

   twoC: {
    image: "images/dark.jpg",
    text: "You hear The void hum around you, maintaining the same note and tone without rest. Another distant noise can be heard, like the whooshing of air. You could just stay here...",
    buttons: [["Divide what is and what is not","lvlUp(altReality.three)"],["Leave", "lvlUp(altReality.twoB)"],["Embrace madness", "lvlUp(altReality.zero)"]]
  },

  three: {
    image: "images/vision.jpg",
    text: "Your eyes adjust to the developing contrast. A flat shadowy landscape expands for miles. The light is warm, almost hot.",
    buttons: [["Look around", "lvlUp(altReality.four)"], ["Reminisce about simpler times", "lvlUp(altReality.threeB)"]]
  },

  threeB: {
    image: "images/olddays.jpg",
    text: "You think about when The void was just a uniform black nothingness that engulfed all of your senses and threatened to swallow you whole. Man, those were the days.",
    buttons: [["Look around", "lvlUp(altReality.four)"],["Look up", "lvlUp(altReality.fourB)"]]
  },

  four: {
    image: "images/distance.jpg",
    text: "Blurry black dots hover on the horizon. Gradually, The void gets brighter and seems to shrink inward.",
    buttons: [["Head towards dots", "lvlUp(altReality.five)"],["Look up", "lvlUp(altReality.fourB)"]]
  },

  fourB: {
    image: "images/skysnakes.jpg",
    text: "Hundreds of snake-like leviathans writhe anxiously in the sky, fighting for territory near The void's sun. The tails of any of these monsters are nowhere to be found. There are only heads with enormous mouths, red beady eyes, and long black manes. You don't like them very much.",
    buttons: [["Look around", "lvlUp(altReality.four)"]]
  },

  five: {
    image: "",
    text: "",
    buttons: [["continue", "lvlUp(altReality.zero)"]]
  },

    zero: {
    text: "You are so bored that you succumb to madness. Game Over.",
  }
};

lvlUp(altReality.one);



