// forEach

function forEach (array, callback) {
	for (var i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}

// map

function map (array, callback) {
	var result = [];
	for (var i = 0; i < array.length; i++) {
		result.push(callback(array[i]));
	}
	return result;
}

// reduce

function reduce (array, callback) {
	var previous = array[0];
	array = array.slice(1, array.length);
	forEach(array, function (value) {
		previous = callback(previous, value);
	});
	return previous;
}

// filter

function filter (array, callback) {
	var result = [];
	forEach(array, function (value) {
		if (callback(value)) {
			result.push(value);
		}
	})
	return result;
}

// ................................................

var plays = [
    { title: "Cymbeline", author: "Shakespeare", year: 1623 },
    { title: "The Tempest", author: "Shakespeare", year: 1623 },
    { title: "Hamlet", author: "Shakespeare", year: 1603 },
    { title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600 },
    { title: "Macbeth", author: "Shakespeare", year: 1620 },
    { title: "Death of a Salesman", author: "Arthur Miller", year: 1949 },
    { title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949 }
];

// EXERCISE 1

function pluck (array, property) {
	var mapProp = map(array, function (value) {
		return value[property];
	});
	return mapProp;
}

console.assert(pluck(plays,'title').length === 7);
console.assert(typeof pluck(plays, 'year')[0] === 'number');

// EXERCISE 2

function reject (array, callback) {
	var result = [];
	forEach(array, function (value) {
		if (!callback(value)) {
			result.push(value);
		}
	})
	return result;
}

function rejectTest(value) {
	if (value.year > 1900) {
		return true;
	} else {
		return false;
	}
}

console.assert(reject(plays, rejectTest).length === 5);
console.assert(typeof reject(plays, rejectTest)[0] === 'object');

// EXERCISE 3

function find (array, callback) {
	var found;
	forEach(array, function (value) {
		if (found === undefined && callback(value)) {
			found = value;
		}
	});
	return found;
}

console.log(find(plays, rejectTest));

