const fetchJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } };
        const newJoke = await axios.get(`https://icanhazdadjoke.com`, config);
        return newJoke.data.joke;
    } catch (e) {
        return "No jokes available! Sorry!";
    }
};

// list
const list = document.querySelector(".list");

const addJoke = async () => {
    const joke = await fetchJoke();
    const newLI = document.createElement("li");
    newLI.append(joke);
    list.append(newLI);
};

// button
const button = document.querySelector("#btn");
button.addEventListener("click", addJoke);

// when ever user clicks on button, it will add new joke to the list
// and it will fetch new joke from the api
