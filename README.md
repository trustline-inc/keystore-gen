# keystore-gen

![npm](https://img.shields.io/npm/v/@trustline/keystore-gen)

Utility to generate an encrypted Ethereum KeyStore file from a plaintext private key

## Usage

Install the package globally:

```
$ npm install -g @trustline/keystore-gen
```

Run the command. Enter the private key (without the `0x` prefix) and an encryption password:

```
$ keystore-gen
✔ Please enter the private key: … ****************************************************************
✔ Please enter the encryption password: … *********
```

You can save the resulting JSON output to disk.