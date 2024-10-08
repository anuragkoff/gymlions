export default function SignupValidation(values) {
    // alert("")
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.email === "") {
        error.email = "Name should not be empty"
    }else if (!email_pattern.test(values.email)) {
        error.email = "Email didn't match"
    }else {
        error.email = ""
    }


    if (values.password === "") {
        error.password = "Name should not be empty"
    }else if (!password_pattern.test(values.password)) {
        error.password = "Password didn't match"
    }else {
        error.password = ""
    }
    
    if (values.cPassword === "") {
        error.cPassword = "Name should not be empty"
    }else if (!password_pattern.test(values.cPassword)) {
        error.cPassword = "Password didn't match"
    }else if (!(values.password === values.cPassword)) {
        alert("Password and Confirm password didn't match ")
    }else {
        error.password = ""
    }

   

    return error;
}