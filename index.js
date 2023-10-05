let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function () {
        if (this.childNodes[1].classList.contains("fa-plus")) {
            this.childNodes[1].classList.remove("fa-plus");
            this.childNodes[1].classList.add("fa-times");
        } else {
            this.childNodes[1].classList.remove("fa-times");
            this.childNodes[1].classList.add("fa-plus");
        }

        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function validateEmail() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim(); // Trim whitespace

    // Minimum and maximum length requirements
    const minLength = 5;
    const maxLength = 25;

    if (email.length < minLength || email.length > maxLength) {
        alert(`Email must be between ${minLength} and ${maxLength} characters.`);
        return;
    }

    // You can also add a regular expression pattern for email validation here if needed

    // If validation passes, you can proceed with form submission or any other action
    alert('Now Check Your Email');
    // Add your form submission logic here
}

