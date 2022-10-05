import dayjs   from 'dayjs';

// docs2
//var AdvancedFormat = require('dayjs/plugin/advancedFormat')
import AdvancedFormat from 'dayjs/plugin/advancedFormat.js' // ES 2015
dayjs.extend(AdvancedFormat)

// mine
//import customParseFormat from 'dayjs/esm/plugin/customParseFormat/index.js';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
dayjs.extend(customParseFormat)

// docs
/*
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)
*/

async function smooch({inputFile}={}) {
    console.log("got", inputFile)
}

export { smooch }
