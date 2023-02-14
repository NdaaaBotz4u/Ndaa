let fs = require('fs')
let handler = async (m, {conn}) => {
    m.reply('Please wait!')
    let sesi = await fs.readFileSync('./ndaabotz.db.json')
    return conn.sendMessage(m.chat, {document: sesi, mimetype: 'application/json', fileName: 'ndaabotz.db.json' }, {quoted: m})
}
handler.command = /^(getdb|getdatabase)$/i
handler.tags = ['owner']
handler.help = ['getdb']

module.exports = handler
