const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#cpassword")
const userForm = document.querySelector(".info-form");
const mismatch = document.querySelector(".mismatch");

userForm.addEventListener("submit", (e) => {
    if (confirmPassword.value !== password.value) {
        e.preventDefault()
        mismatch.textContent = "Password mismatch!";
    }
})

