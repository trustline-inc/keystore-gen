import prompts from 'prompts';
import { toBuffer } from 'ethereumjs-util';
import { writeFileSync } from 'fs';
import Wallet from 'ethereumjs-wallet'

const main = (async () => {
  const response = await prompts([
    {
      type: 'password',
      name: 'privateKey',
      message: 'Please enter the private key:'
    },
    {
      type: 'password',
      name: 'encryptionPassword',
      message: 'Please enter the encryption password:'
    }
  ], {
    onCancel: prompt => {
      process.exit()
    }
  });
  const privateKeyBuffer = toBuffer(`0x${response.privateKey}`);
  const wallet = Wallet.fromPrivateKey(privateKeyBuffer);
  const keystoreFilename = wallet.getV3Filename();
  const filePath = `${__dirname}/${keystoreFilename}`;
  console.log(`Saving keystore file: ${filePath}`);
  const keystore = await wallet.toV3(response.encryptionPassword);
  console.log(keystore);
  const output = JSON.stringify(keystore, null, 2);
  writeFileSync(filePath, output);
})()