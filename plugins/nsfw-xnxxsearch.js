let { xnxxsearch } = require('../lib/scrape.js')
let handler = async (m, {conn, text, command, usedPrefix}) => {
	if (!text) throw `Mau cari apa? contoh ${usedPrefix}xnxx jordi`
	let anu = await xnxxsearch(text)
    let row = await anu.result.map((v) => ({
    	title: v.title,
    	description: `Title ${v.title}\nInfo : ${v.info}\nLink : ${v.link}`,
    	rowId: '/xnxxdl ' + v.link
    }))
    let button = {
    	buttonText: 'Tap!',
    	description: `${htki}Xnxx Search${htka}`,
    	footerText: wm
    }
    return conn.sendListM(m.chat, button, row, m)
}
handler.help = ['xnxx']
handler.tags = ['nsfw']
handler.command = /^(xnxxsearch|xnxx)$/i
handler.premium = true

module.exports = handler
