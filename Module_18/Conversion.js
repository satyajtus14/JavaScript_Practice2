function inchToFeet(inch){
    const feet = inch / 12;

    return feet;
}

const userHeight = inchToFeet(75);
console.log(userHeight);

// Display height by string like 5 feet 3 inches
function inchToFeet2(inch)
{
    const feetFraction = inch / 12;
    const remaningheight= parseInt(feetFraction);
    const actualHeight= inch % 12;
    const result = remaningheight +" feet "+actualHeight+" inches";
    return result;

}

const userHeight2 = inchToFeet2(75);
console.log(userHeight2);
