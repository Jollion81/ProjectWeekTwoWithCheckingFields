document.querySelectorAll('.modal-toggle').forEach(button => {
    button.addEventListener('click', toggleModal)
})

function toggleModal(e) {
    e.preventDefault();
    document.querySelector('.modal').classList.toggle('open')
}

const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const reasonInput = document.querySelector('#reason')
const termsInput = document.querySelector('#terms')
const submitButton = document.querySelector('#submit')

nameInput.addEventListener('change', validateForm)
emailInput.addEventListener('change', validateForm)
reasonInput.addEventListener('change', validateForm)
termsInput.addEventListener('change', validateForm)

const nameError = document.querySelector('#nameError')
const emailError = document.querySelector('#emailError')
const reasonError = document.querySelector('#reasonError')
const termsError = document.querySelector('#termsError')

function validateForm(e) {
    let formValid = true

    submitButton.disabled = true

    nameError.classList.remove('error')
    emailError.classList.remove('error')
    reasonError.classList.remove('error')
    termsError.classList.remove('error')

    if (nameInput.value.length < 5) {
        formValid = false
        nameError.classList.add('error')
    }

    if (emailInput.value.length === 0 || emailInput.value.length > 255) {
        formValid = false
        emailError.classList.add('error')
    }

    if (reason.value.length !== 0 && (reason.value.length < 50 || reason.value.length > 500)) {
        formValid = false
        reasonError.classList.add('error')
    }

    if (termsInput.checked === false) {
        formValid = false
        termsError.classList.add('error')
    }

    if (formValid) {
        submitButton.disabled = false
    }
}
