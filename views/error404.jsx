const React = require('react')
const Default = require('./layouts/Default')

function error404() {
    return (
        <Default>
    <h1>404 Page</h1>
        </Default>
    )
}

module.exports = error404