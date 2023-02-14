let yts = require('yt-search')
let handler = async (m, {conn, text}) => {
  if (!text) throw `Judul nya mana?\n contoh /play strong`
  const r = await yts(text)

  const videos = r.videos.slice( 0, 1 )
  videos.forEach( function ( v ) {
    const views = String( v.views ).padStart( 10, ' ' )
    conn.send2Button(m.chat, `Title : ${v.title}\nTotal Views : ${views}\nDurasi : ${v.timestamp}\nAuthor : ${v.author.name}\nURL : ${v.url}`, wm, `Video`, '/ytv ' + v.url, `Audio`, `/yta ` + v.url, m)
  })
}
handler.help = ['play <query>']
handler.tags = ['downloader']
handler.command = /^(p|play)$/i

module.exports = handler