const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Notepad is better than Microsoft Word');
});

client.login(process.env.BOT_TOKEN);
