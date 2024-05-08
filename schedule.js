document.addEventListener('DOMContentLoaded', function() {
    const scheduleForm = document.getElementById('schedule-form');

    scheduleForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const availability = document.getElementById('availability ').value;

        // Store scheduling data in local storage
        const scheduling = {
            date: date,
            time: time,
            availability : availability 
        };

        localStorage.setItem('scheduling', JSON.stringify(scheduling));

        // Redirect to schedule_client.html
        window.location.href = 'schedule_client.html';
    });
});
