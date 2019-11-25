const db = require('../../data/db-config')

function find() {
    return db('posts')
}

function add(post) {
    return db('posts')
    .insert(post)
}

module.exports = {
    find,
    add,
}