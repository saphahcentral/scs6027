// ticket-submit.js

document.addEventListener('DOMContentLoaded', () => {
    const ticketForm = document.getElementById('ticket-form');
    if (!ticketForm) return;

    ticketForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(ticketForm);
        const payload = {};
        formData.forEach((value, key) => payload[key] = value);

        try {
            const response = await fetch('https://saphahcentral.github.io/scs6027/api/ticket-submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();
            if (result.success) {
                alert('Ticket submitted successfully!');
                ticketForm.reset();
            } else {
                alert('Error submitting ticket: ' + result.message);
            }
        } catch (err) {
            console.error(err);
            alert('Network error: Could not submit ticket.');
        }
    });
});
