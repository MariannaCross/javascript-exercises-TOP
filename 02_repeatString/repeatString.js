const number = Math.floor(Math.random() * 1000)

const repeatString = function(string,num) {
    if (num < 0 || !Number.isInteger(num)) {//returns ERROR if num is negative or non-integer
        return 'ERROR';
    }
    let result = "";
    for (let i = 0; i < num; i++) {
        result += string;
    }
    return(result);
}
repeatString("", number);

// Do not edit below this line
module.exports = repeatString;
