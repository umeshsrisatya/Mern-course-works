const list = document.querySelector("ul");
const form = document.querySelector("#Login");
const i = document.querySelector("#umesh");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(i.value);
});
