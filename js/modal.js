
var link = document.querySelector(".btn-email");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
// var storage = localStorage.getItem("login", login);
// var storageEm = localStorage.getItem("email", email);
//
// var isStorageSupport = true;
// var storage = "";
// var storageEm = "";
//
// try {
// 	storage = localStorage.getItem("login");
// 	storageEm = localStorage.getItem("email");
// } catch (err) {
// 	isStorageSupport = false;
// }


link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage && storageEm) {
		login.value = storage;
		email.value = storageEm;
		message.focus();
	} else {
		login.focus();
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

	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", login.value);
			localStorage.setItem("email", email.value);
		}
	}

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

//  MAP

var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");


  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });


  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
    	  evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });
