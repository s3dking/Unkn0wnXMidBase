const { GatewayIntentBits, Client, Partials } = require('discord.js');
const client = new Client({ intents: Object.keys(GatewayIntentBits), partials: Object.keys(Partials) });

client.logs = require('./Utils/logs');
client.config = require('./config.json');
require('./Utils/clientPassing')(client)
if(!client.config.token) return console.log('\x1b[38;5;202mNo token found in config.json, please add your token to the config.json file or alternatively do \x1b[90mnpm run config\x1b[38;5;202m in your terminal\x1b[0m');

client.login(client.config.token);