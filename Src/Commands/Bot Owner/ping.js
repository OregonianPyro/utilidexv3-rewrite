const Command = require('../../Base/Command.js');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            category: 'general',
            description: 'Runs a connection test to the Discord API.',
            usage: '{prefix}ping',
            parameters: 'None',
            extended: false,
            guildOnly: false,
            devOnly: false,
            supportOnly: false,
            perms: ['SEND_MESSAGES', 'SEND_MESSAGES'],
            aliases: ['p', 'ding']
        });
    };

    async run(message, args) {
        return message.channel.send('Pong!');
    };
};