// index.js
function reverseString(str) {
    return str.split('').reverse().join('');
}

function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function countWords(str) {
    return str.trim().split(/\s+/).length;
}

function truncateString(str, maxLength) {
    return str.length <= maxLength ? str : str.slice(0, maxLength) + '...';
}

function camelCase(str) {
    return str
        .trim()
        .split(/\s+/)
        .map((word, index) => (index === 0 ? word.toLowerCase() : capitalizeString(word.toLowerCase())))
        .join('');
}

function kebabCase(str) {
    return str
        .trim()
        .split(/\s+/)
        .map(word => word.toLowerCase())
        .join('-');
}

function snakeCase(str) {
    return str
        .trim()
        .split(/\s+/)
        .map(word => word.toLowerCase())
        .join('_');
}

function isPalindrome(str) {
    const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

function removeWhitespace(str) {
    return str.replace(/\s+/g, '');
}

function repeatString(str, times) {
    return str.repeat(times);
}

function replaceSubstring(str, oldSubstring, newSubstring) {
    return str.split(oldSubstring).join(newSubstring);
}

function randomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

module.exports = {
    reverseString,
    capitalizeString,
    countWords,
    truncateString,
    camelCase,
    kebabCase,
    snakeCase,
    isPalindrome,
    removeWhitespace,
    repeatString,
    replaceSubstring,
    randomString
};