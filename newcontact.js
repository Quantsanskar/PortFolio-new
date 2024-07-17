(function () {
    // Replace with your EmailJS user ID
    emailjs.init("B7kIw1Kek9l4WyJwa");
})();

window.onload = function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Replace with your EmailJS service ID and template ID
        emailjs.sendForm('service_btwf50p', 'template_jfai29o', this)
            .then(function () {
                console.log('SUCCESS!');
                document.getElementById('contactForm').reset();
                alert('Message sent successfully!');
                
            }, function (error) {
                console.log('FAILED...', error);
                alert('Failed to send the message. Please try again.');
            });
    });
}