module.exports = {
    name: 'se',
    description: 'Sends embed based on args',
    execute(message, args) {
            message.channel.send({
            embed: {
              color: '008000',
              title: `${args[0]}`,
              description: `${args[1]}`,
              image: `https://cdn.discordapp.com/attachments/649103841781874698/690740535559716875/DogKnife.JPG`,
              fields: (
                  { name: `${args[2]}`, value: `${args[3]}` }
            )
          }})
    },
};