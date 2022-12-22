const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const Marksman = "914915714547216394"
const Mage= "914915807153250334"
const Jungler= "914915908504387624"
const Tank= "914915890871541760"
const Offlaner= "914915903953596458"

let userid1 = await lib.utils.kv.get({
  key: 'Marksman'
});
let userid2 = await lib.utils.kv.get({
  key: 'Mage'
});
let userid3 = await lib.utils.kv.get({
  key: 'Jungler'
});
let userid4 = await lib.utils.kv.get({
  key: 'Tank'
});
let userid5 = await lib.utils.kv.get({
  key: 'Offlaner'
});
const ALLOWED_USER_IDS = [
 userid1,userid2,userid3,userid4,userid5
  
];

if (ALLOWED_USER_IDS.includes(context.params.event.member.user.id)) {
  
  // let result = await lib.discord.guilds['@0.1.3'].members.retrieve({
    // user_id: context.params.event.member.user.id, // required
    // guild_id: context.params.event.guild_id // required
  // });
  // let length=
let user = context.params.event.member.user.id;
// await lib.discord.channels['@0.2.0'].messages.create({
  // "channel_id": `${context.params.event.channel_id}`,
  // "content": "",
  // "tts": false,
  // "embeds": [
    // {
      // "type": "rich",
      // "title": ``,
      // "description": ` <@${user}> Congrats on Your New Team, You Have Your Role Removed`,
      // "color": 0x00FFFF,
      // "footer": {
        // "text": `if this was a mistake, go back to the reaction role and take your role back otherwise you won't be taken into consideration by the bot while forming a new Team`
      // }
    // }
  // ]
// });

// Using Node.js 14.x +
// use "lib" package from npm


// make API request
let result = await lib.discord.guilds['@0.1.3'].members.retrieve({
  user_id: context.params.event.member.user.id,
  guild_id: context.params.event.guild_id
});
let len= result.roles.length;

for(let i=0; i<len; i++){
  if(result.roles[i]==Marksman){
    
    let result = await lib.discord.guilds['@0.1.3'].members.roles.destroy({
      role_id: Marksman, // required
      user_id: user, // required
      guild_id: context.params.event.guild_id // required
    });
    
    await lib.discord.channels['@0.2.0'].messages.create({
      "channel_id": `${context.params.event.channel_id}`,
      "content": "",
      "tts": false,
      "embeds": [
        {
          "type": "rich",
          "title": ``,
          "description": ` <@${user}> Congrats on Your New Team, You Have Your **Marksman** Role Removed`,
          "color": 0x00FFFF,
          "footer": {
            "text": `if this was a mistake, go back to the reaction role and take your role back otherwise you won't be taken into consideration by the bot while forming a new Team`
          }
        }
      ]
    });
  }
  
  if(result.roles[i]==Mage){
    
    let result = await lib.discord.guilds['@0.1.3'].members.roles.destroy({
      role_id: Mage, // required
      user_id: user, // required
      guild_id: context.params.event.guild_id // required
    });
    
    await lib.discord.channels['@0.2.0'].messages.create({
      "channel_id": `${context.params.event.channel_id}`,
      "content": "",
      "tts": false,
      "embeds": [
        {
          "type": "rich",
          "title": ``,
          "description": ` <@${user}> Congrats on Your New Team, You Have Your **Mage** Role Removed`,
          "color": 0x00FFFF,
          "footer": {
            "text": `if this was a mistake, go back to the reaction role and take your role back otherwise you won't be taken into consideration by the bot while forming a new Team`
          }
        }
      ]
    });
  }
  
  if(result.roles[i]==Jungler){
    
    let result = await lib.discord.guilds['@0.1.3'].members.roles.destroy({
      role_id: Jungler, // required
      user_id: user, // required
      guild_id: context.params.event.guild_id // required
    });
    
    await lib.discord.channels['@0.2.0'].messages.create({
      "channel_id": `${context.params.event.channel_id}`,
      "content": "",
      "tts": false,
      "embeds": [
        {
          "type": "rich",
          "title": ``,
          "description": ` <@${user}> Congrats on Your New Team, You Have Your **Jungler** Role Removed`,
          "color": 0x00FFFF,
          "footer": {
            "text": `if this was a mistake, go back to the reaction role and take your role back otherwise you won't be taken into consideration by the bot while forming a new Team`
          }
        }
      ]
    });
  }
  
  if(result.roles[i]==Tank){
    
    let result = await lib.discord.guilds['@0.1.3'].members.roles.destroy({
      role_id: Tank, // required
      user_id: user, // required
      guild_id: context.params.event.guild_id // required
    });
    
    await lib.discord.channels['@0.2.0'].messages.create({
      "channel_id": `${context.params.event.channel_id}`,
      "content": "",
      "tts": false,
      "embeds": [
        {
          "type": "rich",
          "title": ``,
          "description": ` <@${user}> Congrats on Your New Team, You Have Your **Tank** Role Removed`,
          "color": 0x00FFFF,
          "footer": {
            "text": `if this was a mistake, go back to the reaction role and take your role back otherwise you won't be taken into consideration by the bot while forming a new Team`
          }
        }
      ]
    });
  }
  
  if(result.roles[i]==Offlaner){
    
    let result = await lib.discord.guilds['@0.1.3'].members.roles.destroy({
      role_id: Offlaner, // required
      user_id: user, // required
      guild_id: context.params.event.guild_id // required
    });
    
    await lib.discord.channels['@0.2.0'].messages.create({
      "channel_id": `${context.params.event.channel_id}`,
      "content": "",
      "tts": false,
      "embeds": [
        {
          "type": "rich",
          "title": ``,
          "description": ` <@${user}> Congrats on Your New Team, You Have Your **Offlaner** Role Removed`,
          "color": 0x00FFFF,
          "footer": {
            "text": `if this was a mistake, go back to the reaction role and take your role back otherwise you won't be taken into consideration by the bot while forming a new Team`
          }
        }
      ]
    });
  }
}
}
