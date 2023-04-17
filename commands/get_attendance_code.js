const { SlashCommandBuilder } = require('discord.js');
const { getNextCode } = require('../utils');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('get_attendance_code')
    .setDescription('Gets the code for you!'),
  async execute(interaction) {
    const { nextTuesday, code } = getNextCode(new Date());
    await interaction.reply(
      `Next Tuesday: \`${nextTuesday}\` \nCode: \`${code}\``
    );
  },
};
