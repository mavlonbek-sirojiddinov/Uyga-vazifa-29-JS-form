var elSiteForm = document.querySelector(".site-form");
var elSiteInput = document.querySelector("#curret-money");
var elBtn = document.querySelector("#btn-js");
var elselect = document.querySelector("#valuta-select")
var elMessage = document.querySelector(".message")
var elMessage2 = document.querySelector(".message")

elSiteForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var inputValue = parseFloat(elSiteInput.value, 10)
  
  elMessage2.textContent = ("PuL ");

  elMessage.textContent += inputValue *  elselect.value;

});

var button = document.querySelector(".white-btn");

var bodyElement = document.querySelector("body")

button.addEventListener("click", function() {
  bodyElement.classList.toggle("active");
});

