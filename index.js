const { default: makeWASocket } = require('@whiskeysockets/baileys');
const { handleMessage } = require('./controllers/handler');

const startBot = async () => {
  const sock = makeWASocket({ printQRInTerminal: true });

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const sender = msg.key.remoteJid;
    const text = msg.message.conversation || "";
    const reply = handleMessage(text);

    await sock.sendMessage(sender, { text: reply });
  });
};

startBot();
