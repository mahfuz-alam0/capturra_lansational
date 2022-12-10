export const set_auth_token = (user) => {
    const current_user = { email: user.email, }
    fetch(`https://genius-car-server-seven-self.vercel.app/jwt`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ current_user })
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('Capturra_token', data.token)
        })
};