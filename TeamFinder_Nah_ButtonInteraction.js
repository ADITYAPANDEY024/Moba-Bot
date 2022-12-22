const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const Marksman = "914915714547216394"
const Mage= "914915807153250334"
const Jungler= "914915908504387624"
const Tank= "914915890871541760"
const Offlaner= "914915903953596458"

let guild_id="722456161630027828"
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
let user=context.params.event.member.user.id


if(user==userid1){
  const members = await lib.discord.guilds['@0.1.0'].members.list({ guild_id, limit: 1000 });
  const membersWithRoleMarksman = members.filter(m => !!m.roles.find(r => r === Marksman));
  let newuser=membersWithRoleMarksman[Math.floor(Math.random() * membersWithRoleMarksman.length) ].user.id;
  if(newuser==user){
    newuser=membersWithRoleMarksman[Math.floor(Math.random() * membersWithRoleMarksman.length) ].user.id;
  }
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
      **AD LANER** :  <@${newuser}>
      **OFFLANER** :  <@${userid5}>`
      ,
      "color": 0x035bff,

    "image": {
      "url": "https://wallpapercave.com/wp/wp3018772.jpg",
      "height": 0,
      "width": 0
    },
    }

  ],

  
});
}

else if(user==userid2){
  const members = await lib.discord.guilds['@0.1.0'].members.list({ guild_id, limit: 1000 });
  const membersWithRoleMage = members.filter(m => !!m.roles.find(r => r === Mage));
  let newuser=membersWithRoleMage[Math.floor(Math.random() * membersWithRoleMage.length) ].user.id;
  if(newuser==user){
    newuser=membersWithRoleMage[Math.floor(Math.random() * membersWithRoleMage.length) ].user.id;
  }
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
      **MAGE** :      <@${newuser}>
      **AD LANER** :  <@${userid1}>
      **OFFLANER** :  <@${userid5}>`
      ,
      "color": 0x035bff,

    "image": {
      "url": "https://wallpapercave.com/wp/wp3018772.jpg",
      "height": 0,
      "width": 0
    },
    }

  ],

  
});
}
else if(user==userid3){
  const members = await lib.discord.guilds['@0.1.0'].members.list({ guild_id, limit: 1000 });
  const membersWithRoleMage = members.filter(m => !!m.roles.find(r => r === Jungler));
  let newuser=membersWithRoleMage[Math.floor(Math.random() * membersWithRoleMage.length) ].user.id;
  if(newuser==user){
    newuser=membersWithRoleMage[Math.floor(Math.random() * membersWithRoleMage.length) ].user.id;
  }
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
      **JUNGLER** :   <@${newuser}> 
      **MAGE** :      <@${userid2}>
      **AD LANER** :  <@${userid1}>
      **OFFLANER** :  <@${userid5}>`
      ,
      "color": 0x035bff,

    "image": {
      "url": "https://wallpapercave.com/wp/wp3018772.jpg",
      "height": 0,
      "width": 0
    },
    }

  ],

  
});
}
else if(user==userid4){
  const members = await lib.discord.guilds['@0.1.0'].members.list({ guild_id, limit: 1000 });
  const membersWithRoleMage = members.filter(m => !!m.roles.find(r => r === Tank));
  let newuser=membersWithRoleMage[Math.floor(Math.random() * membersWithRoleMage.length) ].user.id;
  if(newuser==user){
    newuser=membersWithRoleMage[Math.floor(Math.random() * membersWithRoleMage.length) ].user.id;
  }
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

      **TANK** :      <@${newuser}>
      **JUNGLER** :   <@${userid3}> 
      **MAGE** :      <@${userid2}>
      **AD LANER** :  <@${userid1}>
      **OFFLANER** :  <@${userid5}>`
      ,
      "color": 0x035bff,

    "image": {
      "url": "https://wallpapercave.com/wp/wp3018772.jpg",
      "height": 0,
      "width": 0
    },
    }

  ],

  
});
}
else if(user==userid5){
  const members = await lib.discord.guilds['@0.1.0'].members.list({ guild_id, limit: 1000 });
  const membersWithRoleMage = members.filter(m => !!m.roles.find(r => r === Offlaner));
  let newuser=membersWithRoleMage[Math.floor(Math.random() * membersWithRoleMage.length) ].user.id;
  if(newuser==user){
    newuser=membersWithRoleMage[Math.floor(Math.random() * membersWithRoleMage.length) ].user.id;
  }
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
      **OFFLANER** :  <@${newuser}>`
      ,
      "color": 0x035bff,

    "image": {
      "url": "https://wallpapercave.com/wp/wp3018772.jpg",
      "height": 0,
      "width": 0
    },
    }

  ],

  
});
}
await lib.discord.channels['@0.2.0'].messages.update({
  "message_id":`${context.params.event.message.id}`,
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": "",
      "description": `<@${user}> Declined To Join The Team...`,
      "color": 0x035bff
    }
  ]
});
}
