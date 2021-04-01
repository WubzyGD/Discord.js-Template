const Discord = require('discord.js');
const mongoose = require('mongoose');
const ora = require('ora');

const config = require('./config.json');

const cf = require('./startup/util/clientFunctions');


if (config.logs.colors.enabled) {}



const client = new Discord.Client();

client.config = {
    token: config.auth.bot.token,
    logs: config.logs,
    db: config.auth.db
};



//stores cache and other data

client.misc = {
    startup: {
        noConnect: null,
        withConnection: new Date().getTime()
    }
};



async function init() {

    //actual client initialization
    await client.login(client.config.token).catch(e => {
        
    });

    //database initialization
    await mongoose.connect()

}



await init().catch(e => {

});