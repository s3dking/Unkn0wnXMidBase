const { ChannelType } = require('discord.js');

module.exports = {
    event: 'guildCreate',
    async execute(client, guild) {
        client.logs.event(`${client.user.tag} ( ${client.user.id} ) Has Joined ${guild.name}`)
    }
}