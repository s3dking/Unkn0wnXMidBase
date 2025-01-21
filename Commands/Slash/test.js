const { SlashCommandBuilder } = require('discord.js');

module.exports = { 
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Command description'),
        
    async execute(interaction, client) {
        await interaction.reply({ content: 'Hello!', ephemeral: false });
    }
};