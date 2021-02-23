import main from '../src/index';

jest.mock('prompts', () => {
  return jest.fn().mockResolvedValue({
    privateKey: "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f",
    encryptionPassword: "password"
  })
});

test('it creates a keystore file', async () => {
  await main;
});