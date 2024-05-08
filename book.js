document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointment-form');

    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const problem = document.getElementById('problem').value;

        // Store booking data in local storage
        const booking = {
            date: date,
            time: time,
            problem: problem
        };

        localStorage.setItem('booking', JSON.stringify(booking));

        // Redirect to view_booking.html
        window.location.href = 'appoinment.html';
    });
});
