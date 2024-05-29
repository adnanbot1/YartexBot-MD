var handler = async (m, { conn, participants, usedPrefix, command }) => {
    if (!m.mentionedJid[0] && !m.quoted) {
        return conn.reply(m.chat, '🎌 *ضع علامة أو قم بالرد على رسالة الشخص الذي تريد حذفه*', m);
    }

    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
    const ownerBot = global.owner[0][0] + '@s.whatsapp.net';

    if (user === conn.user.jid) {
        return conn.reply(m.chat, '🚩 لا أستطيع إزالة الروبوت من المجموعة', m);
    }

    if (user === ownerGroup) {
        return conn.reply(m.chat, '🚩 لا أستطيع إزالة مالك المجموعة', m);
    }

    if (user === ownerBot) {
        return conn.reply(m.chat, '🚩 لا أستطيع حذف مالك البوت (' + OwnerBot +')', m);
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
};

handler.help = ['طرد'];
handler.tags = ['grupo'];
handler.command = /^(kick|echar|hechar|طرد|ban)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;
