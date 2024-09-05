const form = document.querySelector('form')

// form Validation handling
form.addEventListener('submit', async (e) => {
        e.preventDefault()
        document.getElementById('fullNameError').textContent = ''
        document.getElementById('phoneNumberError').textContent = ''
        document.getElementById('emailAddressError').textContent = ''
        document.getElementById('additionalMessageError').textContent = ''
        document.getElementById('submitMessage').textContent = ''
        // // error handling

        const fullName = document.getElementById('fullName').value.trim()
        const emailAddress = document.getElementById('emailAddress').value.trim()
        const phoneNumber = document.getElementById('phoneNumber').value.trim()
        const additionalMessage = document.getElementById('additionalMessage').value.trim()
        let isValid = true




        // validation
        if (fullName === '') {
                document.getElementById('fullNameError').textContent = 'Full Name is required'
                isValid = false
        } else
                if (!/^[\p{L}\p{M} \s'-]+$/u.test(fullName)) {
                        document.getElementById('fullNameError').textContent = 'Must contain only letters and spaces'
                        isValid = false
                }

        if (emailAddress === '') {
                document.getElementById('emailAddressError').textContent = 'Email address is required'
                isValid = false
        } else
                if (!/^\S+@\S+\.\S+$/.test(emailAddress)) {
                        document.getElementById('emailAddressError').textContent = 'Please enter a valid email address'
                        isValid = false
                }
        if (phoneNumber === '') {
                document.getElementById('phoneNumberError').textContent = 'Phone number address is required'
                isValid = false
        } else
                if (!/^\d{10,15}$/.test(phoneNumber)) {
                        document.getElementById('phoneNumberError').textContent = 'Please enter a valid phone number'
                        isValid = false
                }

        if (additionalMessage.length > 500) {
                document.getElementById('additionalMessageError').textContent = 'Additional Message must be less than 500 characters.'
                isValid = false;
        }

        // if all conditions passed, send data to server
        if (isValid) {

                const formData = new FormData(form)
                const urlEncoded = new URLSearchParams(formData).toString()

                try {
                        const respone = await fetch('https://ubc-server-k22j4f13k-codecraters-projects.vercel.app/api', {
                                method: "POST",
                                body: urlEncoded,
                                headers: {
                                        'Content-type': 'application/x-www-form-urlencoded',
                                }
                        })
                        if (respone.ok) {
                                setTimeout(() => {
                                        document.getElementById('submitMessage').textContent = 'Form submitted successfully...'
                                }, 100)
                        } else {
                                document.getElementById('submitMessage').textContent = 'Failed to submit form...'
                        }

                } catch (error) {
                        console.error('Error sending data', error)
                        document.getElementById('submitMessage').textContent = 'An error occured while submitting this form...'
                }
                document.getElementById('fullName').value = ''
                document.getElementById('emailAddress').value = ''
                document.getElementById('phoneNumber').value = ''
                document.getElementById('additionalMessage').value = ''



        }
})


// omo this thing no hard at all mtcheew, i need to find a way to add gifs and smileys as comments lol, e go make sense......
