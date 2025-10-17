//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME4rUldlOTlGbGdtMGJOUXdTOFc0TVIySFI2S2pOU2tPMzFLTEpqRExVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnBiOWIxdlAyN3ZVT1FGMkJzN3FiSkNWVzVNZUgrdDhlb01ZdFl1QzduZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSWtobkFVVUlWQVh3WVZYbnR2dE45V212K0VyZWNKamZvTGx0WlFETm13PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCN1pMVWRwaFZNaHhKejlrQ3RvQW12cGdWeG93ck5EakdMdXV0WmZWNXhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNDQzBMUHBac0hydzQ5S3o4bEw2eTg4K0s4OENXYzZ4RzdMd3NIM056VXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpJdWNyVE9WMlRrRVlaTHV0cDF0bTlCbCtLTER5UjRBZHpkUXFzN0hiV1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NuTCsyME1Mek9CUUMvWmlaU3RtRVhzT3U4OWN4bXEvUkQ2L3J0d0hrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWszSFR3dFZMQUFpQTFrZmRQZ1kyYU1PZXpYRS9jejE1M1hpbFlkNG9qND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im43OW45ZE4zWHRqYmJISVQ1c0wrYmtwWDV2YlZtbG9NdGVIUCsvbm93TnRNYXEwR1AyTU92WXRuRG1KZklwbnBtckpDZ2tpZmIvUUpRQ0VRb290TmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ3LCJhZHZTZWNyZXRLZXkiOiJleVc1dGZxSmh0UHoyZWdXajBaR0xJRHEzdTk4RzJVYVVIVFRaWXVJMG5VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyWHNwYkhGZFJGLXhValBZUkluamNnIiwicGhvbmVJZCI6IjQwZjcwYzJjLTEzYzQtNGEzNi1hZTc2LTE1ZjUyMGIyYjc1NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUWdxTUhhanJBTzdMd1ZyZ09FQ3FoRVFNVjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGUrdVdWR1ZuZlowUlYxWkhDQWRUUklReVFJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZTSzRCTVZLIiwibWUiOnsiaWQiOiI5NDc3MTQ2OTYwMzozOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJSYXZpc2hhbiIsImxpZCI6IjEwMzk2MDM4ODA4MzgwMTozOUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wvLzJiRUNFTHlReWNjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik52YzJ6aitMdE9ZWnk4Q0RWSE5Qd0Z0V2NiU3hCdURxSnZhUkJRU3pNaWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjU1NHd5a29reVpueG15djVBUG5rYVFyZmtnOEpqMUwwcGF2MWlxSTFoNTg0REgzQmpDSTNkZEFoWUZ2L2VSaHR1S0ZycWNIMFg4N3JuaElqamJHY0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPQ29aNHcvb3BEZTZYVldXM0NEOGxLVEV1bDl2UGpXVzJZaDBtWmNrRG5YcHU2YXN0NVpBZ3hIQlF5aDh4bWEzdkpuQnlmS0lRaktrekNZSlYwN3Fndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzcxNDY5NjAzOjM5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRiM05zNC9pN1RtR2N2QWcxUnpUOEJiVm5HMHNRYmc2aWIya1FVRXN6SW4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MDcwODY4MiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGVGgifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
