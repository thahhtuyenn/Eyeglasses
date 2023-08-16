/*Validation ADMIN*/

var customerElement = document.getElementById('customer');
var invoiceElement = document.getElementById('invoice');
var startDateElement = document.getElementById('start-date');
var endDateElement = document.getElementById('end-date');

var formElement = document.getElementById('form-find');

customerElement.onblur = function() {
    var customer = customerElement.value.trim();
    if(customer === '') {
        setErrorFor(customerElement, 'Customer not empty');
    } else {
        setSuccessFor(customerElement);
    }
    
}

invoiceElement.onblur = function() {
    var invoice = invoiceElement.value.trim();
    if(invoice === '') {
        setErrorFor(invoiceElement, 'Invoice not empty');
    } else {
        setSuccessFor(invoiceElement);
    }
}

startDateElement.onblur = function() {
    var startDate = startDateElement.value.trim();
    if(startDate === '') {
        setErrorFor(startDateElement, 'Start date not empty');
        return;
    } else {
        setSuccessFor(startDateElement);
    }
    
    var regex = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)[0-9]{2}/;
    if((!regex.test(startDate))) {
        setErrorFor(startDateElement, 'Start date must be dd/mm/yyyy');
        return;
    } else {
        setSuccessFor(startDateElement);
    }
}

endDateElement.onblur = function() {
    var endDate = endDateElement.value.trim();
    if(endDate === '') {
        setErrorFor(endDateElement, 'End date not empty');
        return;
    } else {
        setSuccessFor(endDateElement);
    }

    var regex = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)[0-9]{2}/;
    if((!regex.test(endDate))) {
        setErrorFor(endDateElement, 'End date must be dd/mm/yyyy');
        return;
    } else {
        setSuccessFor(endDateElement);
    }
}

formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();



});

function checkInputs() {
    var customer = customerElement.value.trim();
    var invoice = invoiceElement.value.trim();
    var startDate = startDateElement.value.trim();
    var endDate = endDateElement.value.trim();

    if(customer === '') {
        setErrorFor(customerElement, 'Customer not empty');
    } else {
        setSuccessFor(customerElement);
    }

    if(invoice === '') {
        setErrorFor(invoiceElement, 'Invoice not empty');
    } else {
        setSuccessFor(invoiceElement);
    }

    if(startDate === '') {
        setErrorFor(startDateElement, 'Start date not empty');
    } else {
        setSuccessFor(startDateElement);
    }

    if(endDate === '') {
        setErrorFor(endDateElement, 'End date not empty');
    } else {
        setSuccessFor(endDateElement);
    }
}

function setErrorFor(input, message) {
    var parent = input.parentElement; //.find-item
    var formMessage = parent.querySelector('.form-message');
    formMessage.innerText = message;
}

function setSuccessFor(input) {
    var parent = input.parentElement; //.find-item
    var formMessage = parent.querySelector('.form-message');
    formMessage.innerText = '';
}
