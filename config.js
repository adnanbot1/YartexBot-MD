/* ⚙️ Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['967776643812', '𝐁𝐎𝐓-𝗟𝐎𝐒𝐄𝐅𝐀𝐑 🍧', true], ['967776643812', '👑 𝒍𝒐𝒔𝒆𝒇𝒂𝒓 👑', true], ['967776643812'], ['967776643812'], ['967776643812'], ['967776643812'], ['967776643812'], ['967776643812'], ['967776643812'], ['967776643812'], ['967776643812'], ['967776643812'], ['967776643812'], ['5214434703586'], ['18293132203'], ['573003025991']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['967776643812']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [ /* ['5217294888993'], */ ['5214434703586'], ['5492266466080'], ['5492266613038'], ['573012482597'], ['5215610314499'], ['51935531943'], ['33760536110'], ['5492964650915'], ['50558124470']]

//Aqui encuentras los nombres del bot 
global.packname = ''
global.author = '𝐁𝐎𝐓-𝗟𝐎𝐒𝐄𝐅𝐀𝐑'
global.wm = '𝐁𝐎𝐓-𝗟𝐎𝐒𝐄𝐅𝐀𝐑'
global.wm2 = '𝐁𝐎𝐓-𝗟𝐎𝐒𝐄𝐅𝐀𝐑'
global.gatanina = '𝐁𝐎𝐓-𝗟𝐎𝐒𝐄𝐅𝐀𝐑'
global.cb = '𝐁𝐎𝐓-𝗟𝐎𝐒𝐄𝐅𝐀𝐑'


//Las Versiones Y Entre Otros
global.vs = 'V2'
global.library = 'لوسيفار'
global.baileys = '𝐁𝐎𝐓-𝗟𝐎𝐒𝐄𝐅𝐀𝐑'
global.lenguaje = 'Arab'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '𝐁𝐎𝐓-𝗟𝐎𝐒𝐄𝐅𝐀𝐑'
global.devnum = '+967776643812'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
