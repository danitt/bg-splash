import * as fs from 'fs';

export async function saveBufferToLocal(file: Buffer, fileName: string) {
  const filePath = `${__dirname}/../img/${fileName}`;
  try {
    fs.writeFileSync(filePath, file);
  } catch (e) {
    console.warn('Unable to save file', e);
    throw e; // Escalate to parent error handler
  }
}
