const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('options')
    .setDescription('Options'),
    async execute(interaction, client) {

        const menu = {
            type: 1,
            components: [
                {
                    type: 3,
                    placeholder: 'Options',
                    custom_id: 'menus',
                    options: [
                        {
                            label: 'Option One',
                            description: 'Option #1',
                            value: 'option1'
                        },
                        {
                            label: 'Option Two',
                            description: 'Option #2',
                            value: 'option2'
                        }
                    ]
                }
            ]
        }

        await interaction.reply({ content: 'Press an option', components: [menu] })
    }
}