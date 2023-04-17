const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('clear_bot_msg')
    .setDescription('Clears the mess!'),
  async execute(interaction) {
    // get channel
    const channel = interaction.channel;
    // get messages
    const messages = await channel.messages.fetch();
    // filter messages
    const botMessages = messages.filter((msg) => msg.author.bot);
    // delete messages
    await channel.bulkDelete(botMessages);
    await interaction.reply('Cleared all my mess :)');
  },
};
