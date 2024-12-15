//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349131904442";
global.owner = process.env.OWNER_NUMBER || "2349131904442";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID 
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUQzYnRybEFKTHM3YnJZTFRtMWRtR1BseXl6d0VVK2JZNm1yNERGL3BIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickZqb3N6aklvRmhwYmZtaGFDWndvbVNoalg3MEdNaGwyZ1dXQ0FNdXhodz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Q1pmWHdMN2Z0bkJUWGM4YytpcWhITDNxTk52REZIVDF6NEswQkU5bUdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTanpQOGJTSkJ1dGc3QWI3NHN4VkVXSCtRUEx5SFBuR1JXRVovQUZmaXdVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBOWHo3WXJWaDd3U3hQbWpZZ0Y3VEZlRXdFc3pxZm5Mc1J2NlkyMDNTMXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZFbGtTMlVXdXpoT0dGVG85d2xYTm9EMVlvdm9XeEJCT0VDeVkxcWVOVFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUQ1YzNRVXZSYkkyN2t1eHp1Qndzb2JKSmhnK214UW1UakdYZlcyR0xWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY25KRG5QRGMwdDlKaTlnZHdRQU5aK2VydFlJOWdUdVppR2U3Q0dJb3BHVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhNL2lNWFBUdUhIN21HL2dCdmlYbWdLVUNIZ2loSVE1R0RVb2NUR1JuRnJDalErZzVrK2dVcW9lZ0k5QUMyd0JabHlMV2toakRzcHlzT3Z0NEFFS2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6IloreERsYVJaU3NCUGFhUi9GWlF0TWV6K2Q4WVpZc2dUZGpRY1pwWHVuZ3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjQ2eWlsd2xGUTFxTmotT2pOb0FLNWciLCJwaG9uZUlkIjoiNWFmY2Q1ZGUtZWExZi00ZDc3LTg1MDQtMDc5OTJjYmQ4Y2E1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhJNkoxUmhCMmRUUjdYWmk3dzQ1ZFozNE5LTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6RnRKWnRiOEEvVTFZL0R5OHlyUktncDR2UWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTDIzTFJWNUMiLCJtZSI6eyJpZCI6IjIzNDkxMzE5MDQ0NDI6MzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiwrFDw5hNUkFE8J2QhCBE8J2QhPCdkJJUSU5ZwrEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0phQTI1Z0NFTExpK3JvR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ill3SDZkZTZtcVRGSGpjTDRCTGFwV0JYMWd6ODZndjh4SEhuaHBXd202VEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjBVeXB0WmFQRUo1OE1iTGRVNjU2NGZRak5iZ1Fwazc5UGtiaVZXSWZoK0E0ZkhYVHl5QUxxeHE3Y2ZVM3lMUm4rMEh1cCsrY3lJaDNQdlV2OHc5dEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmSkNraFM2TEEvbzhWRXdJZy94b0NkUmJvM1lRclEzdi85Nzd5UGVRTmVML0RjaW9WMk9mK3pkVFVvMll6VTBUZGIxRHFHZWF3Z2lWd0lEL1ZSVTJpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMzE5MDQ0NDI6MzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV01CK25YdXBxa3hSNDNDK0FTMnFWZ1Y5WU0vT29ML01SeDU0YVZzSnVreSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDI1OTAwNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDWTUifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
