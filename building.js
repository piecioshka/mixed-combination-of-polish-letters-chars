var smallLetters = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ź', 'ż'];
var bigLetters = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'R', 'S', 'Ś', 'T', 'U', 'W', 'Y', 'Z', 'Ź', 'Ż'];
var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['.', ',', '-', '?', '!', '+', '-', '=', '(', ')', '[', ']', '{', '}'];
var pairs = [];

// Mechanism

smallLetters.forEach(function (x) { smallLetters.forEach(function (y) { pairs.push(x + y); }); });
smallLetters.forEach(function (x) { bigLetters.forEach(function (y) { pairs.push(x + y); }); });
smallLetters.forEach(function (x) { digits.forEach(function (y) { pairs.push(x + y); }); });
smallLetters.forEach(function (x) { special.forEach(function (y) { pairs.push(x + y); }); });

bigLetters.forEach(function (x) { bigLetters.forEach(function (y) { pairs.push(x + y); }); });
bigLetters.forEach(function (x) { smallLetters.forEach(function (y) { pairs.push(x + y); }); });
bigLetters.forEach(function (x) { digits.forEach(function (y) { pairs.push(x + y); }); });
bigLetters.forEach(function (x) { special.forEach(function (y) { pairs.push(x + y); }); });

digits.forEach(function (x) { digits.forEach(function (y) { pairs.push(x + y); }); });
digits.forEach(function (x) { smallLetters.forEach(function (y) { pairs.push(x + y); }); });
digits.forEach(function (x) { bigLetters.forEach(function (y) { pairs.push(x + y); }); });
digits.forEach(function (x) { special.forEach(function (y) { pairs.push(x + y); }); });

special.forEach(function (x) { special.forEach(function (y) { pairs.push(x + y); }); });
special.forEach(function (x) { smallLetters.forEach(function (y) { pairs.push(x + y); }); });
special.forEach(function (x) { bigLetters.forEach(function (y) { pairs.push(x + y); }); });
special.forEach(function (x) { digits.forEach(function (y) { pairs.push(x + y); }); });
