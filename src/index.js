const units = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
};

const teens = {
    "0": "ten",
    "1": "eleven",
    "2": "twelve",
    "3": "thirteen",
    "4": "fourteen",
    "5": "fifteen",
    "6": "sixteen",
    "7": "seventeen",
    "8": "eighteen",
    "9": "nineteen",
};

const tens = {
    "1": "ten",
    "2": "twenty",
    "3": "thirty",
    "4": "forty",
    "5": "fifty",
    "6": "sixty",
    "7": "seventy",
    "8": "eighty",
    "9": "ninety",
};

const h = "hundred";

module.exports = function toReadable(number) {
    strNumber = number.toString();
    if (strNumber.length === 3) {
        if (strNumber.charAt(1) === "0" && strNumber.charAt(2) === "0") {
            return `${units[strNumber[0]]} ${h}`;
        }
        if (strNumber.charAt(1) === "1") {
            return `${units[strNumber.charAt(0)]} ${h} ${teens[strNumber.charAt(2)]}`;
        }
        if (strNumber[1] === "0") {
            return `${units[strNumber.charAt(0)]} ${h} ${units[strNumber.charAt(2)]}`;
        }
        if (strNumber[2] === "0") {
            return `${units[strNumber.charAt(0)]} ${h} ${tens[strNumber.charAt(1)]}`;
        }
        return `${units[strNumber.charAt(0)]} ${h} ${tens[strNumber.charAt(1)]} ${units[strNumber.charAt(2)]}`;
    } else if (strNumber.length === 2) {
        if (strNumber.charAt(0) === "1") {
            return `${teens[strNumber.charAt(1)]}`;
        }
        if (strNumber.charAt(1) === "0") {
            return `${tens[strNumber[0]]}`;
        }
        return `${tens[strNumber[0]]} ${units[strNumber[1]]}`;
    } else {
        return `${units[strNumber]}`
    }

}
