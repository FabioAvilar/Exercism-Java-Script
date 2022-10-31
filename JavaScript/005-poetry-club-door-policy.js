function frontDoorResponse(line) {
    return line[0];
}

// console.log(frontDoorResponse('Stands so high'));
/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
  return line[0];
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
    let upperCase =  frontDoorResponse(word).toUpperCase();

    let lowerCase = word.slice(1).toLowerCase();

    return upperCase + lowerCase;
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  const lastLetter = line.trim();

  return lastLetter.slice(-1);
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  const convertLetter = frontDoorPassword(word);
  const please = ", please";

    return convertLetter + please;
}
