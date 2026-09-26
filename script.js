const signupform = document.getElementById("signupform")
console.log(signupform);
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
signupform.addEventListener("submit", function(event) {
    event.preventDefault();
    if (
        fullname.value === "" ||
        email.value === "" ||
        password.value === "" ||
        confirmPassword.value === ""
    ){

        alert("Please fill in all the fields.");

    }
}); 





































