function lifeInWeeks(age) {
	var left = 90 - age;
	var weeksLeft = Math.floor(left) * 52;
	var monthsLeft = Math.floor(left) * 12;
	var daysLeft = Math.floor(left) * 365;
	console.log(
		"You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left."
	);
}
lifeInWeeks(20);
