const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923247116683" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_14_02_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc4LFxuICAgICAgICA3NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODksXG4gICAgICAgIDk3LFxuICAgICAgICA4MyxcbiAgICAgICAgODksXG4gICAgICAgIDU1LFxuICAgICAgICA0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDU0LFxuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NixcbiAgICAgICAgMjQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDkwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0LFxuICAgICAgICA4NixcbiAgICAgICAgMTE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU0LFxuICAgICAgICA3NCxcbiAgICAgICAgODYsXG4gICAgICAgIDkwLFxuICAgICAgICA2NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM5LFxuICAgICAgICA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyc2VJSCt2VTVLVWFFVExXMDZaYmlxTEhNTmYvUXRKcEROenBLT1luSFFFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrRmRvdUh2cVF5Q0tZT0h5MEhYYmVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdlOWZlYWMxLTI5YzItNDI0My05YTdlLTA0NTIzMzFlNzBkMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICAxNixcbiAgICAgIDM3LFxuICAgICAgMTgsXG4gICAgICAyNTAsXG4gICAgICAyMjcsXG4gICAgICA2OSxcbiAgICAgIDEyLFxuICAgICAgMTAsXG4gICAgICAyMDMsXG4gICAgICA0NyxcbiAgICAgIDI1MCxcbiAgICAgIDIwNyxcbiAgICAgIDI1MyxcbiAgICAgIDIxMCxcbiAgICAgIDI0NixcbiAgICAgIDExMCxcbiAgICAgIDIxMCxcbiAgICAgIDM3LFxuICAgICAgMTcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgMjA4LFxuICAgICAgMjMzLFxuICAgICAgMTU4LFxuICAgICAgODcsXG4gICAgICAxNzgsXG4gICAgICAzMyxcbiAgICAgIDExNSxcbiAgICAgIDEzNyxcbiAgICAgIDc0LFxuICAgICAgMTQyLFxuICAgICAgMTIxLFxuICAgICAgMTY1LFxuICAgICAgNjksXG4gICAgICA2MixcbiAgICAgIDE5NCxcbiAgICAgIDE0MyxcbiAgICAgIDE4NixcbiAgICAgIDEyMixcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKMVFKQlNOWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDbpNmA2YDgo7bZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqSBcXG7igblcXG7CslxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG7wnZCL8J2QhPCdkIbwnZCE8J2QjfCdkIMg8J2QiPCdkI3wnZCS8J2QiPCdkIPwnZCE4oGwwrnCslxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMcjUrZFVDRVBubXZMMEdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib0FpWFgwUWo1cGdLemg5SE9Ob0pEUk5ndVRtZ2s2QjdoSkxoSUJXS0tibEo0NnVkbnBibmhvNEkvNlZiNlducFdUR2RkV0NrN0FKdkFuU1MrZVN5QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUHEyRE9wblcwTVRUNzVHT3RaNTY2aHEyN1l1N25mRWp4eXhyY0Vyc0xsTE9sdEpoOU1DQ3BOR3V1ZmxpRk1OQUh6ZUpyZlphV0VSTy9YMUVRMGZWaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczOTUzNTIzNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
