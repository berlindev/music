const figlet = require('figlet');
const chalk = require('chalk');

module.exports = async (client) => {
  figlet(client.user.tag, function(err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(chalk.red.bold(data + `\n${client.user.tag}`));
  });

  // // let guilds = client.guilds.cache.size;
  // // let users = client.users.cache.size;
  // // let channels = client.channels.cache.size;

  // // const channel = client.channels.cache.get("1000403877289525288");
  // // client.distube.voices.join(channel)

  // const activities = [
  //   `${client.prefix}help`,
  //   `discord.gg/ftw`
  //   // `${client.prefix}play <input> | ${users} users`,
  //   // `${client.prefix}filterlist | ${channels} channels`,
  // ]

  // setInterval(() => {
  //   client.user.setActivity(`${activities[Math.floor(Math.random() * activities.length)]}`, { type: 'WATCHING' });
  // }, 15000)
}
