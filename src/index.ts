import { writeFileSync } from 'fs';
import Wallet from 'ethereumjs-wallet'
import { toBuffer } from 'ethereumjs-util';

const generate = async ({
  encryptionPassword,
  filePath,
  fileName,
  privateKey
}: {
  encryptionPassword: string,
  filePath: string,
  fileName: string,
  privateKey: string
}) => {
  const privateKeyBuffer = toBuffer(`0x${privateKey}`);
  const wallet = Wallet.fromPrivateKey(privateKeyBuffer);
  const keystoreFilename = wallet.getV3Filename();
  const keystore = await wallet.toV3(encryptionPassword);
  const output = JSON.stringify(keystore, null, 2);
  writeFileSync(`${filePath}/${fileName || keystoreFilename}`, output);
}

export { generate }