let { servermc } = require('../lib/scrape.js')
let handler = async (m, {conn, text}) => {
    let res = await servermc()
    let e = res.map((v) => `IP : ${v.ip}\nPort : ${v.port}\nVersi : ${v.versi}\nPlayer  ${v.player}`).join('\n\n')
    conn.reply(m.chat, `${htki}Server MC${htka}\n${e}`, m)
}
handler.help = ['servermc']
handler.tags = ['internet']
handler.command = /^(servermc)$/i

module.exports = handler
