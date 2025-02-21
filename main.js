// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded!");

    // Select all elements with the class 'news-link'
    const articles = document.querySelectorAll(".news-link");

    // Check if any articles exist on the page
    if (articles.length === 0) {
        console.error("No articles found on this page.");
    } else {
        console.log(`Found ${articles.length} articles.`);

        // Add event listeners to each article for hover effects
        articles.forEach(article => {
            article.addEventListener("mouseenter", function() {
                console.log("Hovered over article: " + this.innerText.trim());
            });

            article.addEventListener("mouseleave", function() {
                console.log("Stopped hovering over: " + this.innerText.trim());
            });
        });
    }

    // Get references to input fields
    const emailInput = document.getElementById("email");
    const nameInput = document.getElementById("fullname");

    // Check if email input exists, then add an event listener
    if (!emailInput) {
        console.error("Email input element not found!");
    } else {
        emailInput.addEventListener("input", function() {
            console.log("User is typing in the email box: " + this.value);
        });
    }

    // Check if name input exists, then add an event listener
    if (!nameInput) {
        console.error("Name input element not found!");
    } else {
        nameInput.addEventListener("input", function() {
            console.log("User is typing in the name box: " + this.value);
        });
    }

    // Get references to checkboxes
    const updates = document.getElementById("updates");
    const newsletter = document.getElementById("newsletter");

    // Add an event listener for the "updates" checkbox
    if (updates) {
        updates.addEventListener("change", function () {
            console.log("Updates Box is now:", this.checked ? "Checked" : "Unchecked");
        });
    } else {
        console.error("Updates checkbox not found!");
    }

    // Add an event listener for the "newsletter" checkbox
    if (newsletter) {
        newsletter.addEventListener("change", function () {
            console.log("Newsletter Box is now:", this.checked ? "Checked" : "Unchecked");
        });
    } else {
        console.error("Newsletter checkbox not found!");
    }

    // Add a submit event listener to the form
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior such as reloading the page
        getFormData(); // Call function to collect and process form data
        this.reset(); // Reset the form fields after submission
    });

    // Reference to age input 
    const ageInput = document.getElementById("age");

    if (ageInput) {
        // Add an event listener for changes in the age input field
        ageInput.addEventListener("change", function() {
            console.log("Age after change: " + this.value);
        });
    } else {
        console.error("Age input element not found!");
    }
});

// Function to increase font size of text elements
function increaseFontSize() {
    const elements = document.querySelectorAll('p, h1, h2, h3, h4'); // Select text elements

    elements.forEach(element => {
        let currentSize = window.getComputedStyle(element).fontSize; // Get current font size
        currentSize = parseFloat(currentSize); // Convert size to a number
        let newSize = currentSize + 2; // Increase font size by 2px

        element.style.fontSize = newSize + 'px'; // Apply new font size
    });
}

// Function to collect form data and store it in local storage
function getFormData() {
    let name = document.getElementById("fullname").value; // Get name input value
    let email = document.getElementById("email").value; // Get email input value
    let age = document.getElementById("age").value; // Get age input value
    let updates = document.getElementById("updates").checked; // Get updates checkbox state
    let newsletter = document.getElementById("newsletter").checked; // Get newsletter checkbox state

    // Log form data to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
    console.log("Updates Checked:", updates);
    console.log("Newsletter Checked:", newsletter);

    // Store form data in an object
    let formData = {
        name: name,
        email: email,
        age: age,
        updates: updates,
        newsletter: newsletter
    };

    // Save the object as a JSON string in local storage
    localStorage.setItem("formData", JSON.stringify(formData));

    console.log("Data saved to local storage");
}




