import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')
if (user.registered === true) throw `*⚠️ Ya estás registrado*\n\n¿Quiere volver a registrarse?\n\n💬 Use este comando para *eliminar su registro*\n*${usedPrefix}unreg* <Número de serie>`
if (!Reg.test(text)) throw `*⚠️ Formato incorrecto*\n\n📝 Uso del comamdo: *${usedPrefix + command} nombre.edad*\n💡 Ejemplo : *${usedPrefix + command}* ${name2}.18`
let [_, name, splitter, age] = text.match(Reg)
if (!name) throw '*📝 El nombre no puede estar vacío*'
if (!age) throw '*📝 La edad no puede estar vacía*'
if (name.length >= 30) throw '*⚠️ El nombre es demasiado largo*' 
age = parseInt(age)
if (age > 100) throw '*👴🏻 Wow el abuelo quiere jugar al bot*'
if (age < 5) throw '*👀 hay un bebé jsjsj*'
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
m.react('📩') 
let regbot = `🗃️ *𝐁𝐎𝐓-𝗟𝐎𝐒𝐄𝐅𝐀𝐑* 🗃️
🪁 *Nombre:* ${name}
🎨 *Edad* : ${age} años
🥏 *Numero de serie*:
${sn}`
await m.reply(regbot)
// await conn.sendUrl(m.chat, regbot, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: pp, thumbnailUrl: pp, title: 'Registrado 📩', }})

}
handler.help = ['تسجيل']
handler.tags = ['rg']
handler.command = ['تسجيل', 'reg', 'verificar'] 

export default handler
