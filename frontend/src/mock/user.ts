import { faker } from "@faker-js/faker";
import { User } from "../model/user";

export const mockUser = (): User => {
  return {
    nomeDoUsuario: faker.name.findName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
    profile: faker.image.avatar(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    currentWallet: faker.datatype.number({min: 0, max: 100_000_000}),
  };
};
