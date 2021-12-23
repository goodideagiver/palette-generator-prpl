function generateMonoPalette() {
    let colors = [];
    for (let i = 0; i < 4; i++) {
        colors[i]=Math.floor(Math.random()*16777215).toString(16);  
        let loopColor = colors[i];
        while (loopColor.length < 6) {
            loopColor = "0" + loopColor;
        } 
        colors[i] = loopColor;
        console.log(colors[i] + " " + colors[i].length);
    }
}

function generateMono() {
    let colors = [];
    for (let i = 0; i < 4; i++) {
        let color = Math.floor(Math.random()*255);
        colors[i] = rgbToHex(color,color,color)
    }
    colors.forEach(element => {
        console.log(element);
    });
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  
generateMono();

const mono = document.getElementById('mono').children;
console.log(mono);

for (let j = 0; j < mono.length; j++) {
        let color = Math.floor(Math.random()*255);
        
        mono[j].style.backgroundColor = rgbToHex(color,color,color)
}