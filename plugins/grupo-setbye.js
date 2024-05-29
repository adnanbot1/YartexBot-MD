var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (text) {
if (isROwner) global.conn.bye = text
else if (isOwner) conn.bye = text
else global.db.data.chats.sBye = text
conn.reply(m.chat, '✅ *تم تكوينه بشكل صحيح*', m, fake, )
} else return conn.reply(m.chat, '🎌 *أدخل النص الذي تريد إرساله عندما يغادر الشخص*\n\nيمكنك استخدام @المستخدم للتسمية', m, fake, )

}
handler.help = ['المغادره']
handler.tags = ['grupo']
handler.command = /^المغادره$/i

handler.group = true
handler.admin = true

export default handler
