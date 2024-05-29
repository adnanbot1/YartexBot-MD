let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]
  
user.registered = false
m.reply(`*📇 لم تعد مسجلأ*`)

}
handler.command = ['حذف']
handler.register = true
export default handler
