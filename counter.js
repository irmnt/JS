var call = function(num) {
    var counter = num;
    return function() {
        return counter++;
    };
}

var input = call(3);
console.log(input());
console.log(input());
console.log(input());