const { SlashCommandBuilder } = require('discord.js');
const { getNextCode } = require('../utils');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('get_attendance_code')
    .setDescription('Gets the code for you!'),
  async execute(interaction) {
    const code = getNextCode(new Date());
    await interaction.reply(`The next week's code is \`${code}\``);
  },
};
