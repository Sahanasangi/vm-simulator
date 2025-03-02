// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
});
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Typing Effect
function typeEffect(element, text, speed) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    element.innerHTML = "";
    typing();
}
document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("typing-title");
    if (title) typeEffect(title, "Welcome to VM Simulator", 100);
});

// Hide Loading Screen
window.onload = function() {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
    }, 3000);
};



function openTutorial() {
    document.getElementById("tutorial-modal").style.display = "block";
}

function closeTutorial() {
    document.getElementById("tutorial-modal").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        
        fetch(this.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        }).then(response => {
            if (response.ok) {
                document.getElementById("response-message").innerHTML = "✅ Message Sent Successfully!";
                this.reset();
            } else {
                document.getElementById("response-message").innerHTML = "❌ Error! Please try again.";
            }
        }).catch(error => {
            document.getElementById("response-message").innerHTML = "❌ Network Error!";
        });
    });
});
