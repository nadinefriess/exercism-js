
var Leap = function (year) {
	var result = true;

	if(year % 4 || !(year % 100)){
		result = false;
	}
	if(!(year % 400)){
		result = true;
	}
	return result;
};

module.exports = Leap;
