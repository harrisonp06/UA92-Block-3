// Add a submit event listener to the form
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    getMessageData(); // Call function to collect and process form data
    this.reset(); // Reset the form fields after submission
});

// Function to get form data and store it
function getMessageData() {
    let name = document.getElementById("name").value; // Get name input value
    let email = document.getElementById("email").value; // Get email input value
    let message = document.getElementById("message").value; // Get message input value

    // Log form data to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Store form data in an object
    let contactData = {
        name: name,
        email: email,
        message: message
    };

    // Save the object as a JSON string in local storage
    localStorage.setItem("contactData", JSON.stringify(contactData));

    console.log("Data saved to local storage");
}
