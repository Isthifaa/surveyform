// Function to display the inputted data in a popup
function showPopup() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var dateOfBirth = document.getElementById("dateofbirth").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelector('input[name="male"]:checked') ? "Male" : "Female";
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("number").value;

    var popupContent = `
    First Name: ${firstName}
    Last Name: ${lastName}
    Date of Birth: ${dateOfBirth}
    Country: ${country}
    Gender: ${gender}
    Profession: ${profession}
    Email: ${email}
    Phone Number: ${phoneNumber}
`;

alert(popupContent);

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    showAlert(); // Display the alert pop-up
});
}

// Attach the resetForm function to the reset button
function rest() {
    document.getElementById("form").reset();
}
