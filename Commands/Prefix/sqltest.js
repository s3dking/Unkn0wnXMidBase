module.exports = {
    name: 'sqltest',
    async execute(message, args, client) {
        if(!args[0]) return message.reply('You must have a mesage to insert');
        const content = args[0]
        await client.db.prepare('INSERT INTO sqltest (content) VALUES (?)').run(content)
        await message.reply({ content: 'Inserted into DB'})
    }
}