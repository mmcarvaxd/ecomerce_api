'use strict'

const crypto = use('crypto')
const Helpers = use('Helpers')


/**
 * Generate a random string
 * 
 * @param {number} length - Tamanho da string de retorno
 * @return {string} random string
 */

 const str_random = async (length = 40) => {
    let string = ''
    let len = string.length

    if(len < length) {
        let size = length - len
        let bytes = await crypto.randomBytes(size)
        let buffer = new Buffer(bytes)
        string += buffer.toString('base64').replace(/[^a-zA-z0-0]/g, '').substr(0, size)
    }

    return string
 }

 module.exports = {
     str_random
 }