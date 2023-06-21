var count = 1;


function goToBlog() {
    window.location.href = "blog.html";
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
