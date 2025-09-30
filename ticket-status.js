// ticket-status.js

document.addEventListener('DOMContentLoaded', () => {
    const statusForm = document.getElementById('status-form');
    const statusResult = document.getElementById('status-result');

    if (!statusForm || !statusResult) return;

    statusForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const ticketId = statusForm.querySelector('input[name="ticketId"]').value.trim();
        if (!ticketId) return alert('Please enter a ticket ID.');

        try {
            const response = await fetch(`https://saphahcentral.github.io/scs6027/api/ticket-status?id=${encodeURIComponent(ticketId)}`);
            const data = await response.json();

            if (data.found) {
                statusResult.innerHTML = `
                    <p>Status: ${data.status}</p>
                    <p>Submitted: ${data.submitted}</p>
                    <p>Last Updated: ${data.updated}</p>
                `;
            } else {
                statusResult.textContent = 'Ticket not found.';
            }
        } catch (err) {
            console.error(err);
            statusResult.textContent = 'Network error: Could not fetch ticket status.';
        }
    });
});
