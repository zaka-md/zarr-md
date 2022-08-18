let handler = async m => m.reply(`
╭─「 𝐃𝐨𝐧𝐚𝐬𝐢 𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐚𝐢𝐧𝐢𝐧 𝐃𝐨𝐚𝐧𝐠:𝐯 」
│ •⛽ gopay [0831-327-9084]
│ •⛽ pulsa [0831-3274-9084]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
