const Discord = require('discord.js');
const client = new Discord.Client();

//https://discordapp.com/oauth2/authorize?&client_id=676855873951236147&scope=bot&permissions=510016
 
const prefix = '!';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
	//if(!msg.content.startsWith(prefix)) return;
  	if (msg.content.startsWith(prefix+'ping')) {
    	pong(msg,null);
  	}
});

function pong(msg, tokens){
	msg.channel.send('pong');
}
 
client.login('Njc2ODU1ODczOTUxMjM2MTQ3.XkL1Rg.ffCDunz4V7VVRcXMDZIIYzW-bzQ');