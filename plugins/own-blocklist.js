/* Creado por https://github.com/FG98F */

var handler = async (m, { conn }) => {

await conn.fetchBlocklist().then(async data => {
let txt = `⬣ *القائمة المحظورة*

مجموع المحظورين : *${data.length}*\n\n`
for (let i of data) {
txt += `⬡ @${i.split('@')[0]}\n`}
txt += '────────────────────────'
return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console.log(err)
return conn.reply(m.chat, '🚩 *لا توجد أرقام محظورة*', m, fake, )})

}
handler.help = ['المحظورين']
handler.tags = ['own']
handler.command = ['المحظورين', 'listblock'] 

handler.rowner = true

export default handler
