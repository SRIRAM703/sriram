
// Toggle the visibility of the project description
// JavaScript to toggle visibility of project description
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


// Function to toggle the visibility of the "More About Me" section
function toggleMoreInfo() {
    const moreInfo = document.getElementById('moreInfo');
    const btn = document.getElementById('moreInfoBtn');
    
    // Toggle the display of the additional content
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block"; // Show the content
        btn.textContent = "Show Less"; // Change button text
    } else {
        moreInfo.style.display = "none"; // Hide the content
        btn.textContent = "More About Me"; // Change button text back
    }
}
// JavaScript to toggle the active class on navbar links
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Scroll to Top Button Logic
const scrollTopBtn = document.getElementById('scrollTopBtn');

        // Show button when scrolling down
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });
        
        // Smooth scroll to top
        scrollTopBtn.addEventListener('click', () => {
    const header = document.getElementById('header');
    header.scrollIntoView({ behavior: 'smooth' });
});
