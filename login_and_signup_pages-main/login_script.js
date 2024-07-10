let addUserFormEle = document.getElementById("addUserForm");
let nameEle = document.getElementById("name");
let emailEle = document.getElementById("email");
let nameErrMsgEle = document.getElementById("nameErrMsg");
nameErrMsgEle.classList.add("error");
let emailErrMsgEle = document.getElementById("emailErrMsg");
emailErrMsgEle.classList.add("error");
nameEle.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEle.textContent = "Required*";
}   else {
        nameErrMsgEle.textContent = "";
}
 });
 emailEle.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEle.textContent = "Required*";
}   else {
        emailErrMsgEle.textContent = "";
}
 });
addUserFormEle.addEventListener("submit", function(event) {
event.preventDefault();
});