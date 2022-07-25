/* eslint-disable linebreak-style */
function concatenateStrings(value1, value2) { return value1 + value2; }
function getStringLength(value) { return value.length; }
function getStringFromTemplate(firstName, lastName) { return `Hello, ${firstName} ${lastName}!`; }

function extractNameFromTemplate(value) {
  return value.match(/,\s(\w+\s\w+)!$/)[1];
}


function getFirstChar(value) {
  return value[0];
}


function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}


function repeatString(value, count) {
  return value.repeat(count);
}


function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}


function unbracketTag(str) {
  return str.match(/.*<(\w+)>.*/)[1];
}


function convertToUpperCase(str) {
  return str.toUpperCase();
}


function extractEmails(str) {
  return str.split(';');
}


function getRectangleString(width, height) {
  return `┌${'─'.repeat(width - 2)}┐\n${`│${' '.repeat(width - 2)}│\n`.repeat(height - 2)}└${'─'.repeat(width - 2)}┘\n`;
}


function encodeToRot13(str) {
  function compare(current) {
    if (current <= 'Z') {
      return (current < 'N' ? (current.charCodeAt() + 13) : (current.charCodeAt() - 13));
    }
    return (current < 'n' ? (current.charCodeAt() + 13) : (current.charCodeAt() - 13));
  }
  return str.replace(/[a-z]/ig, (current) => String.fromCharCode(compare(current)));
}


function isString(value) {
  return value ? typeof value.valueOf() === 'string' : false;
}


function getCardId(value) {
  const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const mast = ['♣', '♦', '♥', '♠'];
  return cards.indexOf(value.slice(0, -1)) + mast.indexOf(value.slice(-1)) * 13;
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
