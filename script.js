var isDate = function (input) {
 
    // Check if input is a valid Date object
    if (input instanceof Date && !isNaN(input.getTime())) {
        return true;
    }

    // Check DD/MM/YYYY format
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (typeof input === "string" && regex.test(input)) {
        return true;
    }

    return false;
};

// Do not change the code below. 
const input = prompt("Enter Date.");
alert(isDate(input));

