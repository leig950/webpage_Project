// Ask for user name
var userName = prompt("Please enter your name:");

var welcomeMessage =
    document.getElementById("welcomeMessage");

if (userName !== null && userName.trim() !== "") {

    welcomeMessage.innerText =
        "Welcome, " + userName + "!";

}
else {

    welcomeMessage.innerText =
        "Welcome to my portfolio!";

}



// Display Skills Using a Loop
// ======================================

const skills = [

    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub"

];

const skillsList =
    document.getElementById("skillsList");

skills.forEach(function(skill) {

    const li =
        document.createElement("li");

    li.innerText = skill;

    skillsList.appendChild(li);

});



// Featured Content Logic
// ======================================

var projectCount = 3;

if (projectCount < 3) {

    document.getElementById("resources")
        .style.display = "block";

    document.getElementById("projectsContent")
        .style.display = "block";

}
else {

    document.getElementById("resources")
        .style.display = "none";

}



// Dark Mode
// ======================================

const darkModeToggle =
    document.getElementById("darkMode");

darkModeToggle.addEventListener("change",
function() {

    document.body.classList.toggle(
        "dark-mode"
    );

});



// Contact Form Submission
// ======================================

document.getElementById(
    "submitButton"
).addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        const name =
            document.getElementById(
                "name"
            ).value;

        alert(
            "Thanks, " +
            name +
            ", your message has been sent!"
        );

    }
);