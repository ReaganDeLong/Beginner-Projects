const generate = document.querySelector('.generate');
const color = document.querySelector('.color');
const compColor = document.querySelector('.comp-color');
const compColorContainer = document.querySelector('.comp-color-container');


generate.addEventListener('click', colorFunction);

function colorFunction() {
    const random = Math.random().toString(16).substring(2, 8);
    const generatedColor = '#' + random;
    const complementaryColor = getComplementaryColor(generatedColor);

    color.innerHTML = generatedColor;
    document.body.style.backgroundColor = generatedColor;
    compColor.innerHTML = 'Complementary Color Example: ' + complementaryColor;
    compColorContainer.style.backgroundColor = complementaryColor;
}

function getComplementaryColor(hexColor) {
    hexColor = hexColor.replace("#", "");
    var rgbColor = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    if (!rgbColor) {
      return null;
    }
  
    var r = parseInt(rgbColor[1], 16);
    var g = parseInt(rgbColor[2], 16);
    var b = parseInt(rgbColor[3], 16);
    var invertedR = 255 - r;
    var invertedG = 255 - g;
    var invertedB = 255 - b;
  
    var complementaryHexColor = "#" + componentToHex(invertedR) + componentToHex(invertedG) + componentToHex(invertedB);
    return complementaryHexColor;
  }
  
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }