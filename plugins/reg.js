import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')
if (user.registered === true) throw `*⚠️ انت مسجل مسبقا*\n\n¿هل تريد التسجيل?\n\n💬 استخدم هاذا الامر *.تسجيل+عدنان+العمر*\n*${usedPrefix}unreg* <الرقم السري>`
if (!Reg.test(text)) throw `*⚠️ تنسيق غير صحيح*\n\n📝 باستخدام الأمر: *${تسجيل + عدنان} الاسم.العمر*\n💡 مثال : *${usedPrefix + command}* ${name2}.19`
let [_, name, splitter, age] = text.match(Reg)
if (!name) throw '*📝 لا يمكن أن يكون الاسم فارغًا*'
if (!age) throw '*📝 لا يمكن أن يكون العمر فارغًا*'
if (name.length >= 30) throw '*⚠️ الاسم طويل جدأ*' 
age = parseInt(age)
if (age > 100) throw '*👴🏻 واو الجد يريد أن يلعب دور الروبوت*'
if (age < 5) throw '*👀 مرحبا بك*'
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
m.react('📩') 
let regbot = `🗃️ *𝐁𝐎𝐓-𝗟𝐎𝐒𝐄𝐅𝐀𝐑* 🗃️
🪁 *الاسم:* ${name}
🎨 *العمر* : ${age} años
🥏 *الرقم السري*:
${sn}`
await m.reply(regbot)
// await conn.sendUrl(m.chat, regbot, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: pp, thumbnailUrl: pp, title: 'Registrado 📩', }})

}
handler.help = ['تسجيل']
handler.tags = ['rg']
handler.command = ['تسجيل', 'reg', 'verificar'] 

export default handler
