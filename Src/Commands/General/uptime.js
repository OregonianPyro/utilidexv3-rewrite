const Command = require('../../Base/Command.js');
const { format, distanceInWordsToNow } = require('date-fns');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'uptime',
            category: 'general',
            description: 'Displays how long the bot has been online.',
            usage: '{prefix}uptime',
            parameters: 'None',
            extended: false,
            devOnly: false,
            staffOnly: false,
            perms: ['SEND_MESSAGES', 'EMBED_LINKS'],
            aliases: []
        });
    };

    async run(message, args) {
        /**
         let restarted = distanceInWordsToNow(new Date(this.client.readyAt), new Date());
        const embed = new RichEmbed()
            .setColor(this.client.color)
            .setAuthor(this.client.user.username, this.client.user.displayAvatarURL)
            .setTitle('Bot Uptime')
            .setDescription(`The bot has been online since **${uptime}**\n» Last Restarted: ${restarted} ago`);
        return message.channel.send(embed);
         */
        const time = format(new Date(this.client.readyAt), 'MM/DD/YY, hh:mm A');
        const restarted = distanceInWordsToNow(new Date(this.client.readyAt), new Date());
        return message.responder.embed({
            authorName: this.client.user.username,
            authorURL: this.client.user.displayAvatarURL(),
            title: 'Bot Uptime',
            description: `The bot has been online since \`${time}\`\n» Last Restarted: ${restarted} ago`
        });
    };
};