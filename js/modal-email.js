var link = document.querySelector(".btn-email");
var popup = document.querySelector(".write_us");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]")
var storage = localStorage.getItem("login", login);
var storageEm = localStorage.getItem("email", email);

var isStorageSupport = true;
var storage = "";
var storageEm = "";

try {
	storage = localStorage.getItem("login");
	storageEm = localStorage.getItem("email");
} catch (err) {
	isStorageSupport = false;
}


link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage && storageEm) {
		login.value = storage;
		email.value = storageEm;
		message.focus();
	} else {
		message.focus();
	}
	
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
	if (!login.value || !email.value || !message.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error"); 
		console.log("косяк");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", login.value);
			localStorage.setItem("email", email.value);
		}
	}
	
});

window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });