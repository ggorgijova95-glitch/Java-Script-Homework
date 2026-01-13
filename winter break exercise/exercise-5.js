// Initialize total and count
let total = 0;   // sum of grades
let count = 0;   // number of subjects
// Student object
let student = {
    name: "Bob Bobsky",
    grades: {
        Math: 10,
        English: 6,
        Science: 8,
        Sport: 9,
        Chemistry: 6
    }
};
console.log("Student Name: " + student.name);

// Loop through each subject
for (let subject in student.grades) {
    let grade = student.grades[subject]; // get the grade
    console.log(subject + ": " + grade); // print subject and grade
    total += grade;  // add grade to total
    count++;         // count the subject
}

// Calculate average
let average = total / count;
console.log("Average grade: " + average);

// Check if student passed
if (average >= 8) {
    alert(student.name + " has PASSED the semester!");
    console.log(student.name + " has PASSED the semester!");
} else {
    alert("Student has FAILED the semester.");
    console.log("Student has FAILED the semester. Average needs to be at least 8.");
}

