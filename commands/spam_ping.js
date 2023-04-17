const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('spam_ping')
    .setDescription('Spam pings the person!')
    .addUserOption((option) =>
      option
        .setName('person')
        .setDescription('The person to spam ping')
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName('times')
        .setDescription('The amount of times to spam ping')
        .setRequired(true)
    ),
  async execute(interaction) {
    // spam ping the person
    const person = interaction.options.getUser('person');
    const times = interaction.options.getInteger('times');

    await interaction.reply({
      content: `Spam pinged <@${person.id}> ${times} ${
        times > 1 ? 'times' : 'time'
      }!`,
      ephemeral: true,
    });

    for (let i = 0; i < times; i++) {
      // send message don't reply
      await interaction.channel.send(`<@${person.id}>`);
    }
    await person.send("You've been spam pinged! >:)");
  },
};
