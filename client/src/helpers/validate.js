import toast from "react-hot-toast";

function emailVerify(error = {}, values) {
    if (!values.email) {
        error.email = toast.error("Email address is required!");
    } else if (
        !values.email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
        error.email = toast.error("Invalid email address!");
    }
    return error;
}

export async function emailValidate(values) {
    const errors = emailVerify({}, values);
    return errors;
}
