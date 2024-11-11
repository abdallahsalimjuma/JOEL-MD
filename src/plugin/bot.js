import config from '../../config.cjs';

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "bot") {
    const start = new Date().getTime();
    await m.React('⚡');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const text = `┏۞*Scorpion 𝚖𝚍 𝚋𝚘𝚝 𝚎𝚗𝚊𝚋𝚕𝚎𝚍*
┃𝚔𝚎𝚎𝚙 𝚌𝚊𝚕𝚖 𝚍𝚞𝚍𝚎
┗━━━━┓
┏━━━━┛
┃https://whatsapp.com/channel/GufiUEQ7Jj1D2kszcZqOgx
┗━━━━━━━━━━━━━━━۞`;
    sock.sendMessage(m.from, { text }, { quoted: m });
  }
}

export default ping;
