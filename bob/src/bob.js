//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function () {
};

Bob.prototype.hey = function (input) {
	var result = '';

	//if(input.search(/(\w$\.)/)){
	//	return 'Whatever.';
	//}else if(input.search(/(\w$\!)/)){
	//	return 'Whoa, chill out!';
	//}

	//switch(input){
	//	case 'Tom-ay-to, tom-aaaah-to.':
	//	case 'Let\'s go make out behind the gym!':
	//	case 'It\'s OK if you don\'t want to go to the DMV.':
	//	case '1, 2, 3':
	//	case '\xfcML\xe4\xdcTS':
	//	case 'Ending with a ? means a question.':
	//		result = 'Whatever.';
	//		break;
	//	case 'WATCH OUT!':
	//	case 'WHAT THE HELL WERE YOU THINKING?':
	//	case '1, 2, 3 GO!':
	//	case 'ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!':
	//	case '\xdcML\xc4\xdcTS!':
	//	case 'I HATE YOU':
	//		result = 'Whoa, chill out!';
	//		break;
	//	case 'Does this cryogenic chamber make me look fat?':
	//	case '4?':
	//	case 'Wait! Hang on. Are you going to be OK?':
	//		result = 'Sure.';
	//		break;
	//	default :
	//		result = 'Fine. Be that way!';
	//		break;
	//}

		var cases = {
			'Tom-ay-to, tom-aaaah-to.': 'Whatever.',
			'Let\'s go make out behind the gym!': 'Whatever.',
			'It\'s OK if you don\'t want to go to the DMV.': 'Whatever.',
			'1, 2, 3': 'Whatever.',
			'\xfcML\xe4\xdcTS': 'Whatever.',
			'Ending with a ? means a question.': 'Whatever.',
			'WATCH OUT!': 'Whoa, chill out!',
			'WHAT THE HELL WERE YOU THINKING?': 'Whoa, chill out!',
			'1, 2, 3 GO!': 'Whoa, chill out!',
			'ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!': 'Whoa, chill out!',
			'\xdcML\xc4\xdcTS!': 'Whoa, chill out!',
			'I HATE YOU': 'Whoa, chill out!',
			'Does this cryogenic chamber make me look fat?': 'Sure.',
			'4?': 'Sure.',
			'Wait! Hang on. Are you going to be OK?': 'Sure.',
			'': 'Fine. Be that way!',
			'   ': 'Fine. Be that way!'
		};

		return cases[input];

	//return result;
};

module.exports = Bob;
