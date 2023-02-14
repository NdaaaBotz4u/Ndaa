let fetch = require('node-fetch')
const { Configuration, OpenAIApi } = require("openai");
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.users[m.sender]
    if (chat.chatbot && !chat.isBanned && !m.fromMe) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        const configuration = new Configuration({

  apiKey: aikey,

});

const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({

  model: "text-davinci-003",

  prompt: m.text,

  max_tokens: 2048,

});

m.reply(response.data.choices[0].text);
   // m.reply(`${json.success}`)
        return !0
    }
    return true
}
module.exports = handler
