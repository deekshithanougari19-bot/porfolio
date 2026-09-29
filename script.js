// Project button

function showProject(projectName) {
    alert(
        "Project: " + projectName +
        "\n\nMore project details will be added soon!"
    );
}


// Contact form

function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields.");
        return;
    }

    alert(
        "Thank you, " + name +
        "!\n\nYour message has been received."
    );

    document.querySelector("form").reset();
}