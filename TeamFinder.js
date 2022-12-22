const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const Marksman = "914915714547216394"
const Mage= "914915807153250334"
const Jungler= "914915908504387624"
const Tank= "914915890871541760"
const Offlaner= "914915903953596458"
// ttl:86400



const guild_id = context.params.event.guild_id

// Get all members then filter down to those with the given role ID
// Note: Only works for up to 1000 members
const members = await lib.discord.guilds['@0.1.0'].members.list({ guild_id, limit: 1000 });
const membersWithRoleMarksman = members.filter(m => !!m.roles.find(r => r === Marksman));
const membersWithRoleMage= members.filter(m => !!m.roles.find(r => r === Mage));
const membersWithRoleJungler = members.filter(m => !!m.roles.find(r => r === Jungler));
const membersWithRoleTank = members.filter(m => !!m.roles.find(r => r === Tank));
const membersWithRoleOfflaner = members.filter(m => !!m.roles.find(r => r === Offlaner));



let userid1= membersWithRoleMarksman[Math.floor(Math.random() * membersWithRoleMarksman.length) ].user.id;
let userid2= membersWithRoleMage[Math.floor(Math.random() * membersWithRoleMage.length)].user.id;
let userid3= membersWithRoleJungler[Math.floor(Math.random() * membersWithRoleJungler.length) ].user.id;
let userid4= membersWithRoleTank[Math.floor(Math.random() * membersWithRoleTank.length) ].user.id;
let userid5= membersWithRoleOfflaner[Math.floor(Math.random() * membersWithRoleOfflaner.length)].user.id;

await lib.utils.kv.set({
  ttl:86400,
  key: 'Marksman',
  value: userid1,
});
await lib.utils.kv.set({
  ttl:86400,
  key: 'Mage',
  value: userid2,
});
await lib.utils.kv.set({
  ttl:86400,
  key: 'Jungler',
  value: userid3,
});
await lib.utils.kv.set({
  ttl:86400,
  key: 'Tank',
  value: userid4,
});
await lib.utils.kv.set({
  ttl:86400,
  key: 'Offlaner',
  value: userid5,
});

await lib.discord.channels['@0.2.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": ``,
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 1,
          "label": `Found My Team`,
          "custom_id": `btn_1`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `😍`
          },
          "type": 2
        },
        {
          "style": 1,
          "label": `Nah!`,
          "custom_id": `btn_2`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `😒`
          },
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `**Team Finder**`,
      "description": `Go Ahead Play a Couple Of Games With Your New Team 
      
        If You All Are Happy With Your New Team, Tap - "Found My Team"
        
        Else If Any Of You Doesn't Wanna Join This Team, Tap-"Nah"   
        (in that case the bot will reroll for that person's position only while making sure the rest of the team stays the same)
        
      **TANK** :      <@${userid4}>
      **JUNGLER** :   <@${userid3}> 
      **MAGE** :      <@${userid2}>
      **AD LANER** :  <@${userid1}>
      **OFFLANER** :  <@${userid5}>`
      ,
      "color": 0x00FFFF,

    "image": {
      "url": "https://wallpapercave.com/wp/wp3018772.jpg",
      "height": 0,
      "width": 0
    },
    }

  ],

  
});
