// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// Only respond to messages containing "hi", "hey", "hello", or "sup"
if (context.params.event.content.match(/Scimitar's Bot|Scimitars Bot| Scimitar'sBot|ScimitarsBot|Scimi's Bot|Scimis Bot|Scimi'sBot/i)) {
  let messageContent = context.params.event.content.match(/hi|hey|hello|sup/i);

  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `Hello I am a bot designed by Scimitar(Devansh) and my main job is to find Teams and Scrims, just tag me and i'll randomly pick a team of 5 members taking one from Marksman, Mage, Jungler, Offlaner and Tank players`,
    message_reference: {
      message_id: context.params.event.id
    }
  });
}