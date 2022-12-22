import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
let ibeng = 'ibeng'
let url = await fetch(`https://api.ibengtools.my.id/api/download/tiktok2?apikey=${ibeng}&url=${args[0]}`)
let json = await url.json()
    if (url.status !== 200) throw await url.text()
    if (!json.status) throw json
conn.sendFile(m.chat, json.result.audio.link1, 'dj2.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(a(udio)?|mp3|sound)(dl)?(download(er)?)?$/i

handler.limit = true

export default handler