module.exports = function toReadable(number) {
    const dig=['zero', 'one', 'two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens=['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dec=['',' ten', ' twenty', ' thirty',' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];

    let result = '';
    const stringNumber = number.toString();
    switch (stringNumber.length) {
        case 3:
            result = (stringNumber.length === 3 && stringNumber[2] === '0') ? 
                (`${result}${dig[+stringNumber[0]]} hundred ${dec[+stringNumber[1]]}`) : 
                (`${result}${dig[+stringNumber[0]]} hundred${dec[+stringNumber[1]]} ${dig[+stringNumber[2]]}`);
                break;
        case 2: 
            result = (stringNumber.length === 2 && stringNumber[1] === '0') ? 
                (`${result}${dec[+stringNumber[0]]}`) : 
                (number < 20 && number > 10) ? 
                (`${result}${tens[+stringNumber[1]]}`) : 
                (`${result}${dec[+stringNumber[0]]} ${dig[+stringNumber[1]]}`);
                break;
        case 1:
            result = `${result}${dig[+stringNumber[0]]}`;
    }
return result.trim();
}
