var handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {

if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}

let pesan = args.join` `
let oi = `يتم استدعائكم: ${pesan}`
let teks = `🚩 *حضور*\n\n${oi}\n\n`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
for (let username of participants) {
teks += `• @${username.id.split('@')[0]}\n`}

conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )

}
handler.help = ['منشن']
handler.tags = ['grupo']
handler.command = /^(منشن|invocar|invocacion|todos|invocación)$/i

handler.botAdmin = true
handler.admin = true
handler.group = true

export default handler
