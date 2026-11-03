// Show a welcome message when the header button is clicked.
function showWelcome() {
    alert("Welcome to KIET University! We are happy to see you.");
}

// This form is a front-end demo. It does not send data to a server.
document.getElementById("admissionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var studentName = document.getElementById("fullName").value;
    document.getElementById("formMessage").textContent =
        "Thank you, " + studentName + "! Your inquiry has been recorded on this page.";
});
