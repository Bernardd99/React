function showInTerminal (message) {
    console.log(message)
}

function greeting ( name, callback) {
    const value = `Halo! nama saya ${name}.`

    callback(value)
}

greeting("Bernard", (message) => {
    console.log(message)
})