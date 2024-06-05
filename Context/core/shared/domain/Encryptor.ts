export interface Encryptor {
  encrypt: (password: string) => string
  compare: (password: string, encryptedPassword: string) => Promise<boolean>
}
