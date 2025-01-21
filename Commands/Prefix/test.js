module.exports = {
    name: 'test', // e.g. !test
    async execute(message, args, client) {
        await message.reply({ content: 'The test worked'})
    }
}