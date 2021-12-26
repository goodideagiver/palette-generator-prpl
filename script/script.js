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
  



const monobtn = document.getElementById('monobtn');
monobtn.addEventListener('click',generateMonoSquares)
function generateMonoSquares() {
    const mono = document.getElementById('mono').children;
    for (let j = 0; j < mono.length; j++) {
        let color = Math.floor(Math.random()*255);        
        mono[j].style.transition = (mono.length/10)/4 + "s";
        mono[j].style.opacity = 0;
        mono[j].style.transform = "translate(0,0px) rotateX(90deg)";
        mono[j].style.backgroundColor = rgbToHex(color,color,color);
        mono[j].style.transitionDelay = ((j+1)/10)/2 + "s";
        setTimeout(() => {
            mono[j].innerHTML = "<div>" + rgbToHex(color,color,color);
            mono[j].style.opacity = 1;
            mono[j].style.transform = "translate(0)";
        }, ((mono.length/10))*1000);
    }
}



const monowrapper = document.getElementById('mono');
const monorange1 = document.getElementById('monorange');
monorange1.addEventListener("change",monoRange)

function monoRange() {
    for (let j = 0; j < mono.length; j++) {
        mono[j].style.opacity = 0;        
    }
    setTimeout(() => {
        let innerMono =[]
    for (let i = 0; i < monorange1.valueAsNumber; i++) {
       innerMono = innerMono + "<div class='pal-it'></div>";
    }
    monowrapper.innerHTML = innerMono;
    generateMonoSquares();
    }, ((mono.length/10))*500);
}

monoRange();


const colorbtn = document.getElementById('colorbtn');
colorbtn.addEventListener('click',generateColorSquares)
const colorsq = document.getElementById('color').children;
function generateColorSquares() {
    for (let j = 0; j < colorsq.length; j++) {
        let color = Math.floor(Math.random()*255);  
        let color2 = Math.floor(Math.random()*255);
        let color3 = Math.floor(Math.random()*255);      
        colorsq[j].style.transition = (colorsq.length/10)/4 + "s";
        colorsq[j].style.opacity = 0;
        colorsq[j].style.transform = "translate(0,0px) rotateX(90deg)";
        colorsq[j].style.backgroundColor = rgbToHex(color,color2,color3);
        colorsq[j].style.transitionDelay = ((j+1)/10)/2 + "s";
        setTimeout(() => {
            colorsq[j].innerHTML = "<div>" + rgbToHex(color,color2,color3);
            colorsq[j].style.opacity = 1;
            colorsq[j].style.transform = "translate(0)";
        }, ((colorsq.length/10))*1000);
    }
}


const colorsqwrapper = document.getElementById('color');
const colorsqrange1 = document.getElementById('colorrange');
colorsqrange1.addEventListener("change",colorRange)

function colorRange() {
    for (let j = 0; j < colorsq.length; j++) {
        colorsq[j].style.opacity = 0;        
    }
    setTimeout(() => {
        let innercolorsq =[]
    for (let i = 0; i < colorsqrange1.valueAsNumber; i++) {
       innercolorsq = innercolorsq + "<div class='pal-it'></div>";
    }
    colorsqwrapper.innerHTML = innercolorsq;
    generateColorSquares();
    }, ((colorsq.length/10))*500);
}

colorRange();