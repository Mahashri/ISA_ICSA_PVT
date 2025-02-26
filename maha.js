document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("notifyForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            // WhatsApp number (with country code)
            const phoneNumber = "918524035315"; // +91 8524035315

            // Encode message for URL
            const whatsappMessage = encodeURIComponent(
                `Hello, my name is ${name}.%0AEmail: ${email}.%0AMessage: ${message}`
            );

            // Redirect to WhatsApp
            window.location.href = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

            // Show success message after 5 seconds when user returns
            setTimeout(() => {
                successMessage.style.display = "block";
                form.reset(); // Clear the form
            }, 5000);
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
});

