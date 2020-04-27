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

    if (len < length) {
        let size = length - len
        let bytes = await crypto.randomBytes(size)
        let buffer = Buffer.from(bytes)
        string += buffer.toString('base64').replace(/[^a-zA-z0-0]/g, '').substr(0, size)
    }

    return string
}

/**
 * Move unique file to a specified path, if it wouldn't specified
 * so 'public/uploads' will be the path
 * @param { FileJar } file the file
 * @param { string } path the specified path
 * @return { FileJar } 
 */

const manage_single_upload = async (file, path = null) => {
    path = path ? path : Helpers.publicPath('uploads')

    //generate a random name
    const random_name = await str_random(30)
    const file_name = `${new Date().getTime()}-${random_name}.${file.subtype}`

    //rename file and move it to the path
    await file.move(path, {
        name: file_name
    })

    return file
}
/**
 * Move multiple files to a specified path, if it wouldn't specified
 * so 'public/uploads' will be the path
 * @param { FileJar } file the file
 * @param { string } path the specified path
 * @return { Object<FileJar> } 
 */

const manage_multiple_upload = async (fileJar, path = null) => {
    path = path ? path : Helpers.publicPath('uploads')

    let successes = [], errors = []

    await Promise.all(fileJar.files.map(async (file) => {
        //generate a random name
        const random_name = await str_random(30)
        
        const file_name = `${new Date().getTime()}-${random_name}.${file.subtype}`
    
        //rename file and move it to the path
        await file.move(path, {
            name: file_name
        })

        if(file.moved()) {
            successes.push(file)
        } else {
            errors.push(file.error())
        }
    }))

    return {successes, errors}
}

module.exports = {
    str_random,
    manage_single_upload,
    manage_multiple_upload
}