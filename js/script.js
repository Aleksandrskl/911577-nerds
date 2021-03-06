var feedback = document.querySelector(".pop-up"); 
var popup = document.querySelector(".feedback-modal");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector("form");
feedback.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");
login.focus();
});
close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});
window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
     evt.preventDefault();
if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
}
}
});
form.addEventListener("submit", function (evt) {
if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
}else {
    localStorage.setItem("login", login.value);
}
});
var mapLink = document.querySelector(".modal-map-contacts");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");