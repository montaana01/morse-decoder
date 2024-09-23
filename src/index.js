const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const SPACE = '**********';

function decode(expr) {
    let message = '';
    // write your solution here
    for (let i = 0; i < expr.length; i += 10) {
        let word  = expr.slice(i, i + 10);

        if (word === SPACE){
            message = message + ' ';
        } else {
            let morse = word.replace(/00/g, '')
                .replace(/10/g, '.')
                .replace(/11/g, '-');
            message = message + MORSE_TABLE[morse];
        }
    }
    return message;
}

module.exports = {
    decode
}