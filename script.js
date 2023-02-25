var index = 0;

var handleClick = function () {
  var Color = Math.floor(Math.random() * 16777215).toString(16);

  document.getElementById("main").style.background = "#" + Color;
  document.getElementsByClassName("content")[0].textContent =
    "The hex code of the color is #" + Color;
};
