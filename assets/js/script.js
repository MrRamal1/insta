let Inpemail = document.getElementsByClassName("Inp-email")[0];
let Inppassword = document.getElementsByClassName("Inp-password")[0];
let btn = document.querySelector(".btn");

btn.addEventListener("click", function (event) {
    event.preventDefault(); 

    let Inpemailvalue = Inpemail.value.trim();
    let Inppasswordvalue = Inppassword.value.trim();

    if (Inpemailvalue.length > 0 && Inppasswordvalue.length > 0) {
        alert("You joined successfully");
    } else {
        alert("Please fill in both fields");
    }
});
