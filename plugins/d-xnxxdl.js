let { xnxxdl } = require('../lib/scrape.js')
let handler = async (m, {conn, text, usedPrefix, command}) => {
	if (!text) throw `Link nya mana?`
	let res = await xnxxdl(text)
    conn.sendFile(m.chat, res.result.files.low, null, null, m)
}
handler.help = ['xnxxdl']
handler.tags = ['downloader']
handler.command = /^(xnxxdl)$/i
handler.premium = true

module.exports = handler
