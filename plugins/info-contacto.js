import fetch from 'node-fetch'

var handler = async (m, { conn, usedPrefix, text, args, command }) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => '')
let name = await conn.getName(who)
let biografia = await conn.fetchStatus('967734144053' +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let biografiaBot = await conn.fetchStatus('967734144053' +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let bio = biografia.status?.toString() || 'Sin Biografía'
let biobot = biografiaBot.status?.toString() || 'Sin Biografía'

await conn.sendContactArray(m.chat, [
[devnum, `${await conn.getName('967734144053'+'@s.whatsapp.net')}`, `🍭 Creador`, dev, email, `🇲🇽 México`, `https://www.youtube.com/@Azami_YT`, bio],
[`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🍧 CuriosityBot-MD`, `📵 No Hacer Spam`, email, `🇲🇽 México`, `https://whatsapp.com/channel/0029VaaLM7m6BIErLz1Xcq3M`, biobot]
], m)
  
}
handler.help = ['المطور', 'contacto', 'creador', 'contactos']
handler.tags = ['info']
handler.command = /^(المطور|contacto|creador|contactos)/i

handler.register = true

export default handler
