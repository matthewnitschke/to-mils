module.exports = (input) => {
    let words = input.split(/\s*[&]\s*|\s*and\s*/g);
    let sum = 0;

    for (i=0; i<words.length; i++) {
        let numbers = parseFloat(/[\d\.]+/gm.exec(words[i])[0])
        let letters = (/[A-z ]+/gm.exec(words[i])[0]).replace(/[ ]/gm, '')

        if (letters == "day" || letters == "days") {
            sum += numbers * 86400000
        } else if (letters == "hr" || letters == "hrs" || letters == "hour" || letters == "hours") {
            sum +=  numbers * 3600000
        } else if (letters == "min" || letters == "mins" || letters == "minute" || letters == "minutes") {
            sum += numbers * 60000
        } else if (letters == "sec" || letters == "secs" || letters == "second" || letters == "seconds") {
            sum += numbers * 1000
        }
    }
    return sum;
}