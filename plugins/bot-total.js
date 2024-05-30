var handler = async (m, { conn }) => {

let totalf = Object.values(global.plugins).filter( (v) => v.help && v.tags ).length

conn.reply(m.chat, `*🎌 اجمالي ميزات البوت:* ${totalf}`, m, fake, )

}
handler.help = ['الميزات']
handler.tags = ['database']
handler.command = ['الميزات']

handler.register = true

export default handler 
