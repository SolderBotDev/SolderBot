module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(client, message, args) {
        message.channel.send({
            embed: {
              color: '008000',
              description: `🏓 Pong - ${Math.floor(client.ws.ping).toLocaleString()} milliseconds`,
            }
          });
    },
};