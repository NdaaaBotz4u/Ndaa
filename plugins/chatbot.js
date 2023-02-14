let handler = async (m, {conn, text, command}) => {
    let chat = global.db.data.users[m.sender]
    if (chat.chatbot) {
                chat.chatbot = false
    m.reply(`chat bot berhasil di matikan`)
    } else {
        chat.chatbot = true
        m.reply(`chat bot berhasil di aktifkan`)
    }
}
handler.tags = ['premium']
handler.help = ['chatbot']
handler.command = /^(chatbot)$/i
handler.premium = true

module.exports = handler