var count = 1;


function goToBlog() {
    window.location.href = "blog.html";
}

// https://css-tricks.com/snippets/javascript/random-hex-color/



function randomColor1(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log("#"+randomColor);
    document.getElementById("grid-item1").style.backgroundColor = "#"+randomColor;
}
function randomColor2(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log("#"+randomColor);
    document.getElementById("grid-item2").style.backgroundColor = "#"+randomColor;
}
function randomColor3(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log("#"+randomColor);
    document.getElementById("grid-item3").style.backgroundColor = "#"+randomColor;
}
function randomColor4(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log("#"+randomColor);
    document.getElementById("grid-item4").style.backgroundColor = "#"+randomColor;
}
function randomColor5(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log("#"+randomColor);
    document.getElementById("grid-item5").style.backgroundColor = "#"+randomColor;
}
function randomColor6(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log("#"+randomColor);
    document.getElementById("grid-item6").style.backgroundColor = "#"+randomColor;
}



function setWhite1(){
    document.getElementById("grid-item1").style.backgroundColor = "white";
}
function setWhite2(){
    document.getElementById("grid-item2").style.backgroundColor = "white";
}
function setWhite3(){
    document.getElementById("grid-item3").style.backgroundColor = "white";
}
function setWhite4(){
    document.getElementById("grid-item4").style.backgroundColor = "white";
}
function setWhite5(){
    document.getElementById("grid-item5").style.backgroundColor = "white";
}
function setWhite6(){
    document.getElementById("grid-item6").style.backgroundColor = "white";
}


function calculateTriangle(){
    let input1 = document.getElementById("triangle-input1").value;
    let input2 = document.getElementById("triangle-input2").value;
    if (isNaN(input1) || isNaN(input2) || input1=="" || input2=="" || input1<=0 || input2<=0) {
        alert("Kindly enter a valid input");
    }
    else{
        var result = (0.5*input1*input2).toFixed(2);
        var p = document.createElement("p");
        p.textContent = count+". Triangle: "+result+"cm2";
        document.getElementById("result-results").appendChild(p);
        count++;
    }
}


function calculateRectangle(){
    let input1 = document.getElementById("rectangle-input1").value;
    let input2 = document.getElementById("rectangle-input2").value;
    if (isNaN(input1) || isNaN(input2) || input1=="" || input2=="" || input1<=0 || input2<=0) {
        alert("Kindly enter a valid input");
    }
    else{
        var result = (input1*input2).toFixed(2);
        var p = document.createElement("p");
        p.textContent = count+". Rectangle: "+result+"cm2";
        document.getElementById("result-results").appendChild(p);
        count++;
    }
}


function calculateParallelogram(){
    let input1 = document.getElementById("parallelogram-input1").value;
    let input2 = document.getElementById("parallelogram-input2").value;
    if (isNaN(input1) || isNaN(input2) || input1=="" || input2=="" || input1<=0 || input2<=0) {
        alert("Kindly enter a valid input");
    }
    else{
        var result = (input1*input2).toFixed(2);
        var p = document.createElement("p");
        p.textContent = count+". Parallelogram: "+result+"cm2";
        document.getElementById("result-results").appendChild(p);
        count++;
    }
}


function calculateRhombus(){
    let input1 = document.getElementById("rhombus-input1").value;
    let input2 = document.getElementById("rhombus-input2").value;
    if (isNaN(input1) || isNaN(input2) || input1=="" || input2=="" || input1<=0 || input2<=0) {
        alert("Kindly enter a valid input");
    }
    else{
        var result = (0.5*input1*input2).toFixed(2);
        var p = document.createElement("p");
        p.textContent = count+". Rhombus: "+result+"cm2";
        document.getElementById("result-results").appendChild(p);
        count++;
    }
}


function calculatePentagon(){
    let input1 = document.getElementById("pentagon-input1").value;
    let input2 = document.getElementById("pentagon-input2").value;
    if (isNaN(input1) || isNaN(input2) || input1=="" || input2=="" || input1<=0 || input2<=0) {
        alert("Kindly enter a valid input");
    }
    else{
        var result = (0.5*input1*input2).toFixed(2);
        var p = document.createElement("p");
        p.textContent = count+". Pentagon: "+result+"cm2";
        document.getElementById("result-results").appendChild(p);
        count++;
    }
}


function calculateEllipse(){
    let input1 = document.getElementById("ellipse-input1").value;
    let input2 = document.getElementById("ellipse-input2").value;
    if (isNaN(input1) || isNaN(input2) || input1=="" || input2=="" || input1<=0 || input2<=0) {
        alert("Kindly enter a valid input");
    }
    else{
        var result = (3.1416*input1*input2).toFixed(2);
        var p = document.createElement("p");
        p.textContent = count+". Ellipse: "+result+"cm2";
        document.getElementById("result-results").appendChild(p);
        count++;
    }
}
