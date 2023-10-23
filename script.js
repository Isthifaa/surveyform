
function openPopup() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var dateOfBirth = document.getElementById("dateofbirth").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelector('input[name="male"]:checked') ? "Male" : "Female";
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("number").value;

    var popupContent = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    `;

    document.getElementById("popup-content").innerHTML = popupContent;
    document.getElementById("popup").style.display = "block";
}

// Function to close the pop-up
function closePopup() {
   
    document.getElementById("fname").value = '';
    document.getElementById("lname").value = '';
    document.getElementById("dateofbirth").value = '';
    document.getElementById("country").value = '';
    document.querySelector('input[name="male"]').checked = false;
    document.querySelector('input[name="female"]').checked = false;
    document.getElementById("profession").value = '';
    document.getElementById("email").value = '';
    document.getElementById("number").value = '';

   
    document.getElementById("popup").style.display = "none";
}

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    openPopup(); 
});



document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    openPopup();
});

