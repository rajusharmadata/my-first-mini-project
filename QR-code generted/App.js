// Selecting elements from the document: the main wrapper, input field, button, and the image element for the QR code
const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img");

let preValue; // Variable to store the previous input value to avoid regenerating the same QR code

// Event listener for the "Generate QR Code" button
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim(); // Get the input value and remove extra spaces
    // If the input is empty or hasn't changed from the last value, do nothing
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue; // Save the current input value
    generateBtn.innerText = "Generating QR Code..."; // Change button text to show it's working
    // Set the QR code image source to generate a new QR code with the input data
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    // When the image loads successfully
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active"); // Add a class to show the QR code
        generateBtn.innerText = "Generate QR Code"; // Reset button text
       
    });
});

// Event listener for keyup event on the input field
qrInput.addEventListener("keyup", () => {
    // If the input is empty, remove the active class and reset the previous value
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active"); // Hide the QR code
        preValue = ""; // Clear the stored previous value
    }
});
