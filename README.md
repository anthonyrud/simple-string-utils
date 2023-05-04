# Simple String Utils

A lightweight utility library for common string manipulation tasks.

## Installation

Install the package using npm:

```bash
npm install simple-string-utils

Usage

Import the desired functions from the library and use them in your JavaScript code:

javascript

const {
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
} = require('simple-string-utils');


const reversed = reverseString('hello world');
console.log(reversed); // Output: 'dlrow olleh'

const capitalized = capitalizeString('hello world');
console.log(capitalized); // Output: 'Hello world'

const wordCount = countWords('hello world');
console.log(wordCount); // Output: 2

const truncated = truncateString('hello world', 5);
console.log(truncated); // Output: 'hello...'

const camelCased = camelCase('hello world');
console.log(camelCased); // Output: 'helloWorld'

const kebabCased = kebabCase('hello world');
console.log(kebabCased); // Output: 'hello-world'

const snakeCased = snakeCase('hello world');
console.log(snakeCased); // Output: 'hello_world'

console.log(isPalindrome('A man, a plan, a canal, Panama!')); // Output: true
console.log(removeWhitespace('Hello, World!')); // Output: 'Hello,World!'
console.log(repeatString('abc', 3)); // Output: 'abcabcabc'
console.log(replaceSubstring('Hello, World!', 'World', 'Universe')); // Output: 'Hello, Universe!'
console.log(randomString(10)); // Output: A random string of 10 characters, e.g., 'Gs8fhKj1Mq'


Functions

reverseString(str)
Reverses the given string.

Parameters:

str (String): The input string to reverse.
Returns: A new string with the characters in reverse order.

capitalizeString(str)
Capitalizes the first character of the given string.

Parameters:

str (String): The input string to capitalize.
Returns: A new string with the first character capitalized.

countWords(str)
Counts the number of words in the given string.

Parameters:

str (String): The input string to count words in.
Returns: The number of words in the input string.

truncateString(str, maxLength)
Truncates the given string to the specified maximum length.

Parameters:

str (String): The input string to truncate.
maxLength (Number): The maximum allowed length for the output string.
Returns: A new string truncated to the specified maximum length, with '...' added if the input string is longer than the maximum length.

camelCase(str)
Converts the given string to camel case.

Parameters:

str (String): The input string to convert.
Returns: A new string in camel case format.

kebabCase(str)
Converts the given string to kebab case.

Parameters:

str (String): The input string to convert.
Returns: A new string in kebab case format.

snakeCase(str)
Converts the given string to snake case.

Parameters:

str (String): The input string to convert.
Returns: A new string in snake case format.



isPalindrome(str)
Checks if the given string is a palindrome (ignoring whitespace, punctuation, and letter case).

Parameters:

str (String): The input string to check.
Returns: true if the string is a palindrome, false otherwise.

removeWhitespace(str)
Removes all whitespace characters from the given string.

Parameters:

str (String): The input string to remove whitespace from.
Returns: A new string with all whitespace characters removed.

repeatString(str, times)
Repeats the given string n times.

Parameters:

str (String): The input string to repeat.
times (Number): The number of times to repeat the string.
Returns: A new string with the input string repeated the specified number of times.

replaceSubstring(str, oldSubstring, newSubstring)
Replaces all occurrences of a substring with a new substring.

Parameters:

str (String): The input string to process.
oldSubstring (String): The substring to be replaced.
newSubstring (String): The substring to replace the old substring with.
Returns: A new string with all occurrences of the old substring replaced with the new substring.

randomString(length)
Generates a random string of a given length.

Parameters:

length (Number): The desired length of the random string.
Returns: A new random string of the specified length, composed of uppercase and lowercase letters and digits.



