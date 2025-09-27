document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("changePasswordForm");
    const oldPasswordInput = document.getElementById("oldPassword");
    const newPasswordInput = document.getElementById("newPassword");
    const confirmNewPasswordInput = document.getElementById("confirmNewPassword");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        document.getElementById("oldPasswordError").textContent = "";
        document.getElementById("newPasswordError").textContent = "";
        document.getElementById("confirmNewPasswordError").textContent = "";

        let isValid = true;

        if (oldPasswordInput.value.trim() === "") {
            document.getElementById("oldPasswordError").textContent = "Please enter your old password.";
            isValid = false;
        } 

        if (newPasswordInput.value.trim() === "") {
            document.getElementById("newPasswordError").textContent = "Please enter a new password.";
            isValid = false;
        } else if (newPasswordInput.value.length < 6) {
            document.getElementById("newPasswordError").textContent = "New password must be at least 6 characters long.";
            isValid = false;
        }

        if (confirmNewPasswordInput.value.trim() === "") {
            document.getElementById("confirmNewPasswordError").textContent = "Please confirm your new password.";
            isValid = false;
        }

        if (newPasswordInput.value !== confirmNewPasswordInput.value) {
            document.getElementById("confirmNewPasswordError").textContent = "New passwords do not match.";
            isValid = false;
        }

        if (isValid) {
            console.log("Password change form is valid. Ready to submit.");
            alert("Password change successful!");
            form.submit(); 
        }
    });
});