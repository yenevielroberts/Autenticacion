
        const $ = el => document.querySelector(el);

        const signupForm = $('#register-form');
        const signupSpan = $('#register-form span');

        //? comprueba si existe. applica el eventListener solo si existe
        signupForm?.addEventListener('submit', e => {
            e.preventDefault()
            const username = $('#register-username').value;
            console.log(username)
            const password = $('#register-password').value;
            const confirmPassword = $('#register-confirm-password').value;

            if (password != confirmPassword) {
                alert('Password do not match')
                return
            }

            fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
                .then(res => {//Obtengo la respuesta de parte del servidor
                    console.log(res)

                    if (res.ok) {
                        signupSpan.innerText = 'Usuario registrado. ..Entrando..'
                        signupSpan.style.color = 'green'
                    } else {
                        signupSpan.innerText = 'Error registrado usuario'
                        signupSpan.style.color = 'red'
                    }
                })

        })