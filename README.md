# keystore-gen

![npm](https://img.shields.io/npm/v/@trustline-inc/keystore-gen)

Utility to generate an encrypted Ethereum KeyStore file from a plaintext private key

## Usage

### Module

```javascript
import { generate } from "@trustline-inc/keystore-gen";

// Saves encrypted keystore file to the path
generate({
  encryptionPassword: "secret",
  path: ".",
  privateKey: "secret"
})
```

### Command Line

Install the package globally:

```
$ npm install -g @trustline-inc/keystore-gen
```

Run the command. Enter the private key (without the `0x` prefix) and an encryption password:

```
$ keystore-gen
✔ Please enter the private key: … ****************************************************************
✔ Please enter the encryption password: … *********
```

You can save the resulting JSON output to disk.
