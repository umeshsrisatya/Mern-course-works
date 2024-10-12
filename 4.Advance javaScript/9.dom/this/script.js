var headings = document.querySelectorAll("h1");
var buttons = document.querySelectorAll(".boxes button");

var randomColor = () => {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var rc = `rgb(${r}, ${g}, ${b})`;
    var ic = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    return { rc, ic };
};

for (let btn of buttons) {
    btn.addEventListener("click", putColor);
}
// this is a reference to the button which only works in the function scope
// and not in the arrow function scope why because arrow function does not have its own this
// so it will go to the parent scope and parent scope is window object

function putColor() {
    const { rc, ic } = randomColor();
    this.style.backgroundColor = rc;
    this.style.color = ic;
}
