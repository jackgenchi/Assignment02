function numComparison() {
    alert("This is a program that will compare two user-input numbers.");
    let num1 = parseInt(prompt("Please input the first number: "));
    let num2 = parseInt(prompt("Please input the second number: "));
    if (num1 === num2) {
        alert("Your first input ("+ num1 +") and second input ("+ num2 +") are equal.");
    }
    else if (num1 >= num2) {
        alert("Your first input ("+ num1 +") is greater than your second input ("+ num2 +") ");
    }
    else {
        alert("Your first input ("+ num1 +") is less than your second input ("+ num2 +") ");
    }
    document.write("Thank you for using the application")
}

numComparison();

