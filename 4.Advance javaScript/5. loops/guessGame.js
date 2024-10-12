var maximum = parseInt(prompt("enter any number"));
while (!maximum) {
    maximum = parseInt(prompt("enter a valid number"));
}
var TargetNum = Math.floor(Math.random() * maximum)
var guess = prompt("enter your guess (press q to quit)")
var attempts = 1;

while (parseInt(guess) !== TargetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);

    if (TargetNum > guess) {
        guess = prompt("too low, Enter a new guess")
        attempts++;
    } else if (TargetNum < guess) {
        guess = prompt("too high, Enter a new guess")
        attempts++;
    } else {
        guess = prompt("Invalid number, Enter a new guess")
    }
}

if (guess === 'q') {
    alert("you quit")
} else {
    alert(`congrats you guessed the number with ${attempts} attempt`)
}