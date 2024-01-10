// replace🤓 :
let text = "I Am Rahele Sherozi"; // Define variable to create text
function repText() { // Create a function to perform the operation of replacing the desired text
    document.write("replaced: ", text.replace("Sherozi", "Shirazi")); // Display text on the screen
}
repText() //Call the replace function And Tamam Tamam😁
//------------------------------------------------------------
// fing😲:

let students = [ // Define a list that contains objects
    { name: "rahele", family: "shirazi", favorit_color: "purple", gamut: "front_end" },
    { name: "mina", family: "mahmodi", favorit_color: "yellow", gamut: "bikar" },
    { name: "tahereh", family: "safari", favorit_color: "purple", gamut: "front_end" },
    { name: "reyhane", family: "hasanzade", favorit_color: "pink", gamut: "teacher" },
    { name: "kosar", family: "shirsolat", favorit_color: "blue", gamut: "docter" },
    { name: "reyhane", family: "shirazi", favorit_color: "sky blue", gamut: "docter" },
]
function findStudent(value) {  // Create a function to perform the operation of finding the desired key and value
    return value.gamut == "front_end"; // Find the desired key and value
}

let myFilter = students.find(findStudent()); // Defining the variable to find with the method of finding the desired value
console.log(myFilter); // Finally show it And Tamam Tamam😁

