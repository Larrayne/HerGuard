function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
    const number_pattern = /^0\d{9}$/;
    const id_pattern = /^\d{13}$/;

    // Name Validation
    if (values.name === "") {
        error.name = "Name should not be empty";
    } else {
        error.name = "";
    }

    // Surname Validation
    if (values.surname === "") {
        error.surname = "Surname should not be empty";
    } else {
        error.surname = "";
    }

    // Email Validation
    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email did not match";
    } else {
        error.email = "";
    }

    // Phone Number Validation
    if (values.number === "") {
        error.number = "Phone number should not be empty";
    } else if (!number_pattern.test(values.number)) {
        error.number = "Phone number should be 10 digits and start with 0";
    } else {
        error.number = "";
    }

    // Password Validation
    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, and one digit";
    } else {
        error.password = "";
    }

    // Confirm Password Validation
    if (values.password2 === "") {
        error.password2 = "Re-enter password";
    } else if (values.password !== values.password2) {
        error.password2 = "Passwords do not match";
    } else {
        error.password2 = "";
    }

    // ID Validation
    if (values.Id === "") {
        error.Id = "ID number should not be empty";
    } else if (!id_pattern.test(values.Id)) {
        error.Id = "ID number should be 13 digits long";
    } else {
        const genderIndicator = parseInt(values.Id.substring(6, 10), 10);
        if (genderIndicator >= 5000) {
            error.Id = "Only female users are allowed to register";
        } else {
            error.Id = "";
        }
    }

    return error;
}

export default Validation;
