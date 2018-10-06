module.exports = (input) => {
    let words = input.split(" and ");
    for (i=0; i<words.length; i++) {
        let numbers = parseFloat(/[\d\.]+/gm.exec(words[i])[0])
        let letters = (/[A-z ]+/gm.exec(words[i])[0]).replace(/[ ]/gm, '')

        if (letters == "day" || letters == "days") {
            words[i] = numbers * 86400000
        } else if (letters == "hr" || letters == "hrs" || letters == "hour" || letters == "hours") {
            words[i] =  numbers * 3600000
        } else if (letters == "min" || letters == "minute" || letters == "minutes") {
            words[i] = numbers * 60000
        } else if (letters == "sec" || letters == "second" || letters == "seconds") {
            words[i] =  numbers * 1000
        }
    }

    return words.reduce(getSum);
}

function getSum(total, num) {
    return total + num;
}