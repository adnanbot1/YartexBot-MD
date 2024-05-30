let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `عمك يورع`;
    await conn.sendMessage(m.chat, {
   react: {
 text: "💀",
 key: m.key,
   }
  })

    conn.sendFile(m.chat, 'https://telegra.ph/file/9c1fd4c1dfdb3c49d9173.mp4', 'video.mp4' , message, m);
};

handler.customPrefix = /^(نيغا|بوت|زنجي|يازنجي)$/i;
handler.command = new RegExp;

export default handler;
