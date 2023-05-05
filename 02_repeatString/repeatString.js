const repeatString = function(string,num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += string;
    }
    console.log(result);
}
repeatString("hey",3);

// Do not edit below this line
module.exports = repeatString;
