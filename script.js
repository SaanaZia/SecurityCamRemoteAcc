function authenticate(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var password = document.getElementById("password").value;
    
    if (password === "camera") {
        // Animate successful login
        animateLoginSuccess();
        setTimeout(function() {
            window.location.href = "video.html"; 
        }, 1000); // Redirect after 1 second
    } else {
        // Animate unsuccessful login
        animateLoginFailure();
    }
}

function animateLoginSuccess() {
    var container = document.getElementById('container');
    container.classList.add('success');
    setTimeout(function() {
        // Redirect to the next page after animation completes
        window.location.href = "video.html"; // Replace "video.html" with your desired page URL
    }, 300); // Redirect after the animation duration (0.6s)
}


function animateLoginFailure() {
    var container = document.getElementById('container');
    container.classList.add('failure');
    setTimeout(function() {
        container.classList.remove('failure');
    }, 1000); // Remove animation class after 1 second
}




