const form = document.querySelector("#userData");
const userName = document.querySelector("#userName");
const userPassword = document.querySelector("#userPassword");
const userEmail = document.querySelector("#userEmail");
const div = document.querySelector("#output");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const ul = document.createElement("ul");
    const li0 = document.createElement("li");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li0.innerHTML    = `<h1>User Data</h1>`;
    li1.textContent = `User Name: ${userName.value}`;
    li2.textContent = `User Password: ${userPassword.value}`;
    li3.textContent = `User Email: ${userEmail.value}`;
    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    div.appendChild(ul);
});
