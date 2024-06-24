// Function to open edit profile overlay
function openEditProfile() {
  document.getElementById("edit-profile-overlay").style.display = "block";
}

// Function to close edit profile overlay
function closeEditProfile() {
  document.getElementById("edit-profile-overlay").style.display = "none";
}

// Function to edit profile field
function editField(fieldName) {
  const value = document.getElementById(fieldName).innerText;
  document.getElementById("edit-" + fieldName).value = value;
  openEditProfile();
}

// Function to submit edited profile
document
  .getElementById("edit-profile-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.forEach((value, key) => {
      document.getElementById(key).innerText = value;
    });
    closeEditProfile();
  });

// Function to populate profile fields with initial data
function populateProfileFields() {
  const fields = ["name", "username", "email", "edit-bio"]; // Add other field IDs here
  fields.forEach((field) => {
    const value = document.getElementById(field).innerText;
    document.getElementById("edit-" + field).value = value;
  });
}

// Call populateProfileFields when the page loads
document.addEventListener("DOMContentLoaded", function () {
  populateProfileFields();
});

// Function to change profile picture
document
  .getElementById("profile-pic-input")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("profile-pic").src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
