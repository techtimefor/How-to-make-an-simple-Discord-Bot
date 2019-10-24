const Discord = require('discord.js'); //The main requirements
const client = new Discord.Client(); //Define what client is

client.login('YOUR TOKEN HERE'); //Put your token here get it from https://discordapp.com/developers/applications/

client.on("ready", () => { 
 client.user.setActivity("Waiting for Someone") //Set the Bot's Activity is
console.log('Im online yay'); //Make the Bot say if it connected to Discord 
});

// Create an Simple Embed
client.on('message', message => {
    if (message.content === 'An Embed') {
      // Remove the "var" line; it isn't necessary.
      let embed = new Discord.RichEmbed()
      // Replace "message.member" with "message.author"
    .setTitle('An Title')
    .setDescription('Some Description')
 .addField('Maker', 'Who it is', true) //Add an Field and Describe it
  .addField('put something here', 'describe the thing', true) // Add more info
    .setColor('RANDOM') // An Random Colour
    .setTimestamp() //Put the time the message was posted
      message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === 'An test') {
    message.channel.send('I Replyed to your Message')
    }
    });
    
    client.on('message', message => {
    if (message.content === 'An image') {
    message.channel.send('Here is the image https://github.com/techtimefor/How-to-make-an-simple-Discord-Bot/blob/master/steps/Inviting%20the%20Bot.png?raw=true')
    }
    });
