
let fs = require('fs')
let chalk = require('chalk')
let yargs = require('yargs')
let moment = require('moment-timezone')

let flaaa = JSON.parse(fs.readFileSync('./api/fla.json'))
let waifu = JSON.parse(fs.readFileSync('./api/waifu.json'))

//=========== STICKER WM =============//
const stick = JSON.parse(fs.readFileSync("src/exif.json"))
if (stick.spackname == '' || stick.sauthor == '') {
  var sticker_name = 'Made with NdaaBotz-MD'
  var sticker_author = 'Ndaa'
} else {
  var sticker_name = stick.spackname
  var sticker_author = stick.sauthor
}
const wm = JSON.parse(fs.readFileSync("src/wm.json"))
if (wm.wm == '') {
  var hias_wm = 'NdaaBotz-MD ʙᴏᴛ ʙʏ Ndaa ⌤'
} else {
  var hias_wm = wm.wm
} 
const symbol = JSON.parse(fs.readFileSync("src/symbol.json"))
if (symbol.symbolA == '') {
  var hias_symA = '乂 '
  var hias_symB = ' • '
} else {
  var hias_symA = symbol.symbolA
  var hias_symB = symbol.symbolB
} 
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      fishingrod: '🎣',
      pickaxe: '⛏️',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      makananpet: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}
// Sticker WM
global.packname = 'Made By'
global.author = 'NdaaBotz-MD'

// bebas
global.img = pickRandom(waifu)
global.fla = pickRandom(flaaa)
global.axios = require('axios')
global.owner = ["6285640575421","6288804285774","6283861872421","62895604670507","6282155276668","6287718046436","62895341826463","6283861872421","6285651409344","6288804285774","6281233620663"]
global.aikey = `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`
global.wm = 'Join Us https://chat.whatsapp.com/KFT4H79MZvfFajzyp5wLLT\nNdaaBotz-MD'
global.sukses = '*DONE*'
//HIASAN!
global.htki = '┅────┅『'

global.htka = '』┅────┅'

global.lopr = '🅟'

global.lolm = 'Ⓛ'

global.htjava = '⫹⫺'
//========Url Template Buttons=========//

global.dtu = 'ɪɴꜱᴛᴀɢʀᴀᴍ'

global.urlnya = "https://www.instagram.com/aguzfamilia"
//=== GAMES====//
global.benar = '_*Benar✅*_'

global.salah = '_*Salah❌*_'

global.dikit = "dikit lagi, semangat ya :')"
global.multiplier = 100 // The higher, The harder levelup
//============= callButtons =============//

global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'

global.phn = '+62 813-2017-0984'
//batas
let genius = "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=genius-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text="
let glow = "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=glow-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text="
let jamm = moment.tz('Asia/Jakarta').format('HH')
let flaTime
if (jamm > 17) flaTime = genius 
else flaTime = glow 
const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
const prefix = new RegExp('^[' + (opts['prefix'] || 'xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
global.set = {
//========={ SETTING HERE }=========//
    name: "NdaaBotz-MD",
    version: "1.0.0",
    repo: 'https://github.com/NdaaaBotz4u/my-base',
    browser: ['My-MD by Ndaaa', 'Safari', '1.0.0'],
    wm: hias_wm,
    sa: hias_symA,
    sb: hias_symB,
    pack: sticker_name,
    auth: sticker_author,
    owner: [
        ['6285640575421', 'Ndaa', true],
        // JSON.parse(readFileSync('./src/owner.json'))
        // ['number', 'name', dev?]
    ],
//===================================//
    mods: [], //JSON.parse(readFileSync('./src/owner.json')),
    prems: [], //JSON.parse(readFileSync('./src/owner.json')),
    api: {
        name: { 
            s: {// API Prefix
                // name: 'https://website'
                neoxr: 'https://api.neoxr.my.id',
                violet: 'https://violetics.pw',
                xteam: 'https://api.xteam.xyz',
                zahir: 'https://zahirr-web.herokuapp.com',
            }
        },
        key: {
            s: {// APIKey Here
                // 'https://website': 'apikey'
               'https://api.neoxr.my.id': '5VC9rvNx',
               'https://violetics.pw': '0b55-fada-712f',
               'https://api.xteam.xyz': 'd90a9e986e18778b',
               'https://zahirr-web.herokuapp.com': 'zahirgans',      
            }
        }
    },
    opts: opts,
    prefix: prefix,
    timestamp: {
        start: new Date
    },
    fla: flaTime,
}
// batas

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

let file_exif = "src/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./src/exif.json')
})

let file_wm = "src/wm.json"
fs.watchFile(file_wm, () => {
  fs.unwatchFile(file_wm)
  console.log(chalk.redBright("Update 'wm.json'"))
  delete require.cache[file_wm]
  require('./src/wm.json')
})

let file_symbol = "src/symbol.json"
fs.watchFile(file_symbol, () => {
  fs.unwatchFile(file_symbol)
  console.log(chalk.redBright("Update 'symbol.json'"))
  delete require.cache[file_symbol]
  require('./src/symbol.json')
})
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
