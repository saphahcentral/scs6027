// auth.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');

    // Login
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = loginForm.querySelector('input[name="username"]').value;
            const password = loginForm.querySelector('input[name="password"]').value;

            try {
                const res = await fetch('https://saphahcentral.github.io/scs6027/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                const result = await res.json();

                if (result.success) {
                    alert('Login successful!');
                    window.location.reload();
                } else {
                    alert('Login failed: ' + result.message);
                }
            } catch (err) {
                console.error(err);
                alert('Network error during login.');
            }
        });
    }

    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            try {
                const res = await fetch('https://saphahcentral.github.io/scs6027/api/logout', { method: 'POST' });
                const result = await res.json();
                if (result.success) {
                    alert('Logged out.');
                    window.location.reload();
                }
            } catch (err) {
                console.error(err);
                alert('Network error during logout.');
            }
        });
    }
});
