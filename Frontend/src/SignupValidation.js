function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{*,}$/
    const number_pattern = /^0\d{9}$/

    if(values.name === "") {
        error.name = "Name should not be empty"
    }
    else {
        error.name = ""
    }

    if(values.surname === "") {
        error.surname = "Surname should not be empty"
    }
    else {
        error.surname = ""
    }


    if(values.email === "") {
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email did not match"
    }
    else {
        error.email = ""
    }

    if(values.number === "") {
        error.number = "Phone number should not be empty"
    }
    else if(!number_pattern.test(values.number)) {
        error.number = "Phone number should be 10 digits and start with 0"
    }
    else {
        error.name = ""
    }


    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password did not match"
    }
    else {
        error.password = ""
    }

    if(values.password2 === "") {
        error.password2 = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password2)) {
        error.password2 = "Password did not match"
    }
    else {
        error.password2 = ""
    }

    return error;
}

export default Validation;