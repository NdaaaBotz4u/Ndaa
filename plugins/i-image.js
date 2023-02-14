const { Configuration, OpenAIApi } = require("openai");
let handler = async (m, {conn, text, command, usedPrefix}) => {
	if (!text) throw `Penggunaan salah! contoh ${usedPrefix}image bendera indonesia`
const configuration = new Configuration({
  apiKey: aikey,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
  prompt: text,
  n: 2,
  size: "1024x1024",
});
conn.sendFile(m.chat, response.data.data[0].url, 'image.jpg', `url : ${response.data.data[0].url}`, m)
}
handler.tags = ['internet']
handler.help = ['image <query>']
handler.command = /^(img|image)$/i
handler.limit = true

module.exports = handler
