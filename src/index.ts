import Wallet from 'ethereumjs-wallet'
import { toBuffer } from 'ethereumjs-util';
import prompts from 'prompts';


(async () => {
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
  const privateKeyBuffer = toBuffer(response.privateKey);
  const wallet = Wallet.fromPrivateKey(privateKeyBuffer);
  const keystoreFilename = wallet.getV3Filename();
  console.log(`Filename: ${keystoreFilename}`);
  const keystore = await wallet.toV3(response.encryptionPassword);
  console.log(keystore);
})()