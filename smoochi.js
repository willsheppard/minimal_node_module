import dayjs   from 'dayjs';

import customParseFormat from 'dayjs/plugin/customParseFormat.js';
dayjs.extend(customParseFormat)

async function smooch({inputFile}={}) {
    console.log("got", inputFile)
}

export { smooch }
