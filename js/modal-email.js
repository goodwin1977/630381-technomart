var link = document.querySelector(".btn-email");
var popup = document.querySelector(".write_us");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("login", login);
var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}


link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage) {
		login.value = storage;
		email.focus();
	} else {
		login.focus();
	}
	
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
	if (!login.value || !email.value) {
		evt.preventDefault();
		console.log("косяк");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", login.value);
		}
	}
	evt.preventDefault();
	console.log(login.value);
	console.log(email.value);
});

window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });