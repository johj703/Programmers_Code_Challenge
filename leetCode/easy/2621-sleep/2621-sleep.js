/**
 * @param {number} millis
 * @returns {Promise}
 */

async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve, millis);
    });
}