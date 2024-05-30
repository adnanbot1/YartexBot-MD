/* ⚙️ Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['967776643812', 'ڪَباؘسِ丫:١⁶𝑘𝑎𝑝𝑎𝑠-بوت 🍧', true], ['967776643812', '👑 𝒍𝒐𝒔𝒆𝒇𝒂𝒓 👑', true], ['967776643812'], ['967776643812'], ['967776643812'], ['967776643812'], ['967776643812'], ['967776643812'], ['967776643812'], ['967776643812'], ['967776643812'], ['967776643812'], ['967776643812'], ['5214434703586'], ['18293132203'], ['573003025991']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['967734144053']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [ /* ['967734144053'], */ ['5214434703586'], ['5492266466080'], ['5492266613038'], ['573012482597'], ['5215610314499'], ['51935531943'], ['33760536110'], ['5492964650915'], ['50558124470']]

//Aqui encuentras los nombres del bot 
global.packname = ''
global.author = 'ڪَباؘسِ丫:١⁶𝑘𝑎𝑝𝑎𝑠-بوت'
global.wm = 'ڪَباؘسِ丫:١⁶𝑘𝑎𝑝𝑎𝑠-بوت'
global.wm2 = 'ڪَباؘسِ丫:١⁶𝑘𝑎𝑝𝑎𝑠-بوت'
global.gatanina = 'ڪَباؘسِ丫:١⁶𝑘𝑎𝑝𝑎𝑠-بوت'
global.cb = 'ڪَباؘسِ丫:١⁶𝑘𝑎𝑝𝑎𝑠-بوت'


//Las Versiones Y Entre Otros
global.vs = 'V2'
global.library = 'ڪَباؘسِ丫:١⁶𝑘𝑎𝑝𝑎𝑠'
global.baileys = 'ڪَباؘسِ丫:١⁶𝑘𝑎𝑝𝑎𝑠-بوت'
global.lenguaje = 'Arab'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'ڪَباؘسِ丫:١⁶𝑘𝑎𝑝𝑎𝑠-بوت'
global.devnum = '+967734144053'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
