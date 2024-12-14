console.log("Welcome to my portfolio!");
// Toggle the visibility of the project description
f// JavaScript to toggle visibility of project description
document.getElementById("learn-more1").addEventListener("click", function() {
    toggleDescription("project1");
});

document.getElementById("learn-more2").addEventListener("click", function() {
    toggleDescription("project2");
});

// Function to toggle the visibility of the project description
function toggleDescription(projectId) {
    var description = document.getElementById(projectId);
    // Check if the description is currently hidden
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";  // Show the description
    } else {
        description.style.display = "none";   // Hide the description
    }
}



