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
    text: "Distill your reality with a composed evocation, then press Enter\n",  
  },

  two: {
    image: "", 
    text: "The void breaths its first breath. The formless landscape before you awaits input.",
    buttons: [["Divide what is and what is not","lvlUp(altReality.three)"],["Observe", "lvlUp(altReality.three)"],["Bask", "lvlUp(altReality.three)"],["Embrace madness", "lvlUp(altReality.three)"]]
  },
  three: {
    image: "",
    text: "",
    buttons: [["continue", "lvlUp(altReality.four)"]]
  },
  four: {
    image: "",
    text: "",
    buttons: [["continue", "lvlUp(altReality.five)"]]
  },
  five: {
    image: "",
    text: "",
    buttons: [["continue", "lvlUp(altReality.six)"]]
  },
  six: {
     image: "",
    text: "",
    buttons: [["continue", "lvlUp(altReality.seven)"]]
  },
  seven: {
    image: "",
    text: "",
    buttons: [["continue", "lvlUp(altReality.one)"]]
  }
  
};

lvlUp(altReality.one);



