function gradeAssigner() {
    let gradeNum = parseInt(prompt("Input your grade score (accepted inputs 1-100): "));
    if (gradeNum >= 90 && gradeNum <=100) {
        console.log("You received an A");
    }
    else if (gradeNum >= 80 && gradeNum <90) {
        console.log("You received a B");
    }
    else if (gradeNum >= 70 && gradeNum <80) {
        console.log("You received a C");
    }
    else if (gradeNum >= 60 && gradeNum <70) {
        console.log("You received a D");
    }
    else if (gradeNum >= 1 && gradeNum <60) {
        console.log("You received an F");
    }
    else {
        alert("You did not input a score between 1 and 100. Please try again.");
    }
    document.write("Thank you for using the application")
}

gradeAssigner();

