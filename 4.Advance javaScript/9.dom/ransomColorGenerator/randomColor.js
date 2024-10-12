const button = document.querySelector("#btn");

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rc = `rgb(${r}, ${g}, ${b})`;
    const ic = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    return { rc, ic };
};

button.addEventListener("click", () => {
    const { rc, ic } = randomColor();
    const heading = document.querySelector("h1");
    heading.innerText = rc;
    heading.style.color = ic;
    document.body.style.backgroundColor = rc;
});
