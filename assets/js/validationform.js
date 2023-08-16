var form = document.querySelector('#form');
console.log(form);
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    var inputValue = form.querySelector('.form-email__input').value;
    console.log(inputValue)
    if(inputValue === '') {
        setErrorFor(inputValue, 'Email is not empty');
        return;
    } else {
        setSuccessFor(inputValue);
    }

    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!regexEmail.test(inputValue)) {
        setErrorFor(inputValue, 'Email must be example@xxx.xxx');
        return;
    } else {
        setSuccessFor(inputValue);
    }
}

function setErrorFor(input, message) {
    var formMessage = document.querySelector('.form-message');
    formMessage.innerText = message;
}

function setSuccessFor(input) {
    var formMessage = document.querySelector('.form-message');
    formMessage.innerText = '';
}