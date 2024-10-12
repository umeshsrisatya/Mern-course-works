function getMilk(money) {
	console.log("leave house");
	console.log("move right");
	console.log("move right");
	console.log("move up");
	console.log("move up");
	console.log("move up");
	console.log("move up");
	console.log("move up");
	console.log("you can buy " + number_of_bottles_you_can_buy(money) + " number of bootles of milk");
	console.log("return home");
	return change(money);
}
function number_of_bottles_you_can_buy(money) {
	return Math.floor(money / 1.5);
}
function change(money) {
	return money % 1.5;
}
change = getMilk(20);
console.log("change is :" + change);
