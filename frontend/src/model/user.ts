export interface User {
  nomeDoUsuario: string;
  email: string;
  senha: string;
  profile: string;
  createdAt: Date;
  updatedAt: Date;
  currentWallet: number;
}