var link = document.querySelector(".btn-email");
var popup = document.querySelector(".write_us");
var close = popup.querySelector(".modal-close");


link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	console.log("клик");
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});