const $ = el => document.querySelector(el);
        const loginForm = $('#login-form')
        const loginSpan = $('#login-form span')

        const registerForm = $('#register-form')
        const registerSpan = $('#register-form span')

        const logoutButton = $('#close-session')


        loginForm?.addEventListener('submit', e => {
            e.preventDefault()
            const username = $('#login-username').value
            const password = $('#login-password').value

            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
                .then(res => {
                    if (res.ok) {
                        loginSpan.innerText = 'Session iniciada ..Entrando..'
                        loginSpan.style.color = 'green'
                        setTimeout(() => {
                            window.location.href = '/protected'
                        }, 2000)
                    } else {
                        loginSpan.innerText = 'Error al iniciar session'
                        loginSpan.style.color = 'red'
                    }
                })
        });

        registerForm?.addEventListener('submit', e => {
            e.preventDefault()
            const username = $('#register-username').value
            const password = $('#register-password').value
            const confirmPassword = $('#register-confirm-password').value

            if (password != confirmPassword) {
                alert('Passwords do not match')
                return
            }

            fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
                .then(res => {
                    console.log(res)
                    if (res.ok) {
                        registerSpan.innerText = 'Usuario registrado. ..Entrando..'
                        registerSpan.style.color = 'green'
                        setTimeout(() => {
                            window.location.href = '/protected'
                        }, 2000)
                    } else {
                        registerSpan.innerText = 'Error al registrar usuari'
                        registerSpan.style.color = 'red'
                    }
                })
        });

        logoutButton?.addEventListener('click', e => {
            e.preventDefault()
            fetch('/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    console.log(res)
                    window.location.href = '/'
                })
        });