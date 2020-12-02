const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client();
client.on("ready",()=>{
    console.log('Your Bot is ready to work');
})
client.on("message",msg=>{
    if (msg.content==="ping")
    {
        msg.reply("PONG");
}
})
client.login(process.env.BOT_TOKEN)