document.addEventListener("DOMContentLoaded", function() {
    const editProfileBtn = document.getElementById("editProfileBtn");
    const saveProfileBtn = document.getElementById("saveProfileBtn");
    const profileForm = document.getElementById("profileForm");

    // Function to enable editing of profile
    function enableEdit() {
        const inputs = profileForm.querySelectorAll("input");
        inputs.forEach(input => {
            input.removeAttribute("disabled");
        });
        saveProfileBtn.removeAttribute("disabled");
        editProfileBtn.setAttribute("disabled", true);
    }

    // Function to save the edited profile
    function saveProfile() {
        const inputs = profileForm.querySelectorAll("input");
        inputs.forEach(input => {
            input.setAttribute("disabled", true);
        });
        saveProfileBtn.setAttribute("disabled", true);
        editProfileBtn.removeAttribute("disabled");
        // Here you can add code to save the profile data, like making an AJAX request
        alert("Profile saved successfully!");
    }

    // Event listener for edit profile button
    editProfileBtn.addEventListener("click", enableEdit);

    // Event listener for save profile button
    saveProfileBtn.addEventListener("click", saveProfile);
});
