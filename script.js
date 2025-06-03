function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("msg").value.trim();

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("msg-error");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else if (!namePattern.test(name)) {
        nameError.textContent = "Name must contain only letters and spaces.";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Message is required.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }

    return isValid;
}
