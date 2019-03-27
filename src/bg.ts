import { exec } from 'child_process';

export async function updateBackground(imgPath: string) {
  return new Promise((res, rej) => {
    const cmd = [
      `osascript -e '`,
      `tell application "System Events" to set picture of every desktop to "`,
      `${__dirname}/../img/${imgPath}`,
      `"'`,
    ].join('');
    console.info('cmd', cmd);
    exec(cmd, (err, stdout, stderr) => {
      if (stderr || err) {
        console.error(`exec error: ${err || stderr}`);
        return rej(err || stderr);
      }
      return res();
    });
  });
}
