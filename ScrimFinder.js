const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const ScrimMembers = context.params.event.data.options[0].value;


const guild_id = context.params.event.guild_id

// Get all members then filter down to those with the given role ID
// Note: Only works for up to 1000 members
const members = await lib.discord.guilds['@0.1.0'].members.list({ guild_id, limit: 1000 });
const membersWithRoleScrim = members.filter(m => !!m.roles.find(r => r === ScrimMembers));

var arr=[];
while(arr.length <2 ){
    var r = Math.floor(Math.random() * membersWithRoleScrim.length);
    if(arr.indexOf(r) === -1) arr.push(r);
}



// let userid1= membersWithRoleScrim[arr[0] ].user.id;;
let userid1=context.params.event.member.user.id;
let userid2= membersWithRoleScrim[arr[1]].user.id;




await lib.discord.channels['@0.2.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": ``,
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `**SCRIM FINDER**`,
      "description": `React with  :no_entry_sign:   if you don't wanna scrim against them

      **BLUE TEAM** :      <@${userid1}>
      **RED TEAM** :   <@${userid2}> 
      `
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