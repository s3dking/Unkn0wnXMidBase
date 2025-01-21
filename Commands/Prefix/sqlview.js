module.exports = {
    name: 'sqlview',
    
    async execute(message, args, client) {
        const content = await client.db.prepare('SELECT content FROM sqltest ORDER BY rowid DESC LIMIT 1').get().content
        await message.reply(content)
    }
};