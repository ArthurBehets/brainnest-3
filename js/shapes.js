const Pi = Math.PI;


function getSquareDiagonale(){
    let size = document.getElementById('squareSize').value;
    console.log(size)
    let diagonale = Math.sqrt((size**2) + (size**2));
    document.getElementById('squareDiagonale').innerHTML = 'The diagonale of this square is ' + diagonale;
}


function getTriangleArea(){
    let firstSide = Number(document.getElementById('firstSide').value);
    let secondSide = Number(document.getElementById('secondSide').value);
    let thirdSide = Number(document.getElementById('thirdSide').value);

    let s = (firstSide + secondSide + thirdSide) / 2 ;

    let area = Math.sqrt(s * ((s - firstSide) * (s - secondSide) * (s - thirdSide)));

    document.getElementById("triangleArea").innerHTML = 'The area of this triangle is ' + area;
}


function getCircleDatas(){
    let circumference;
    let area;

    let diameter = Number(document.getElementById("circleDiameter").value);
    let radius = diameter / 2;

    circumference = Pi * diameter;

    area = Pi * (radius**2);

    document.getElementById("circleDatas").innerHTML = "The circumference of this circle is " + circumference + " and this area is " + area;
}