import { totalmem, freemem } from 'os'
import os from 'os'
import util from 'util'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'
const format = sizeFormatter({ std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B` })

var handler = async (m, { conn }) => {

let timestamp = speed()
let latensi = speed() - timestamp

let _muptime = process.uptime() * 1000
let muptime = clockString(_muptime)

let chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])


let texto = `*🚀 السرعه*
• ${latensi.toFixed(4)}

*⏰ وقت النشاط*
• ${muptime}

*💌 الدردشه*
• ${chats.length} *الدردشه الخاصه*
• ${groups.length} *الجروبات*

*💻 الخادم*
• *الرام:* ${format(totalmem() - freemem())} / ${format(totalmem())}`.trim
conn.sendMessage(m.chat, { text: texto, contextInfo: { externalAdReply: { title: '', body: 'سرعه البوت', thumbnailUrl: 'https://telegra.ph/file/4f3c8f903ad4d5734a44b.jpg', sourceUrl: '', mediaType: 1, renderLargerThumbnail: true }}})

}
handler.help = ['بينج']
handler.tags = ['bot']
handler.command = ['بينج', 'speed']

handler.register = true

export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
