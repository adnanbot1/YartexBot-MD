import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 86400000) return
await conn.reply(m.chat, `👋 اهلا ${nombre}!!
 *${saludo}*

📅 التاريخ: ${fecha}
⏰ الساعه: ${tiempo}

⚠️ *ملاحظه:* لاترسل بريدأ عشوائيأ
🧃 ملاحظه *.الاوامر لعرض قائمه البوت* اكتب 
  
📝 ¿هل تريد دعم هذا المشروع حتى يستمر في التحديث؟ انضم لمجموعتنا: 
*https://whatsapp.com/channel/0029Vag5yfZJf05mDF9kcU2w*`, m, fake, )


user.pc = new Date * 1
}
