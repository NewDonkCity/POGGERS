const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Notepad is better than Microsoft Word');
});

client.on('message', message => {
	var message_content = message.content.toLowerCase();
	if (message_content.includes("word")) {
		message.channel.send("Notepad is better than Microsoft Word");
	}
	if (message_content.includes("notepad")) {
		message.channel.send("Notepad is better than Microsoft Word");
	}
	if (message_content.includes("text")) {
		message.channel.send("Notepad is better than Microsoft Word");
	}
	if (message_content.includes("editor")) {
		message.channel.send("Notepad is better than Microsoft Word");
	}
	if (message_content.includes("visual studio")) {
		message.channel.send("Notepad is better than Microsoft Word");
	}
	if (message_content.includes("code")) {
		message.channel.send("Notepad is better than Microsoft Word");
	}
}

client.login(process.env.BOT_TOKEN);
