import React from 'react'

const validate = (email, password) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    // Minimum eight characters, at least one letter, one number and one special character
    const isPasswordValid =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

    if(!isEmailValid && !isPasswordValid ) return "Email and Password are not valid!";

    if(!isEmailValid) return "Email is not valid!";

    if(!isPasswordValid) return "Password is not valid!";

    

  return null;
}

export default validate
