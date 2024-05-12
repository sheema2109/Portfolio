var typed=new Typed(".text",{

    strings:["Aspiring Web Designer","Aspiring Web Developer"],

    typeSpeed:100,

    backSpeed:100,

    backDelay:1000,

    loop:true

});

const progressBars = document.querySelectorAll('.progress-bar');
progressBars.forEach(progressBar => {
    progressBar.addEventListener('click', () => {
        const percentage = progressBar.querySelector('.percentage');
        percentage.classList.toggle('show');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting by default

        // Validate name field
        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            nameInput.focus();
            return false;
        }

        // Validate email field
        if (emailInput.value.trim() === '') {
            alert('Please enter your email.');
            emailInput.focus();
            return false;
        } else if (!validateEmail(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return false;
        }

        // Validate message field
        if (messageInput.value.trim() === '') {
            alert('Please enter a message.');
            messageInput.focus();
            return false;
        }

        // If all fields are valid, submit the form
        alert('Form submitted successfully!');
        form.reset(); // Optionally, reset the form after submission
    });

    // Function to validate email format
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
