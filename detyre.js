function CheckEmail() {
    let result = document.getElementById("validimi");
    let emailInput = document.getElementById("inputi").value;
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/.test(emailInput)) {
        result.innerHTML = "Email is valid";
        result.style.color = 'green';
    }
    else {
        result.innerHTML = "Email is invalid";
        result.style.color = 'red';
    }
    //^ -  tregon me qka fillon
    // @ - dmth it's a must
}
