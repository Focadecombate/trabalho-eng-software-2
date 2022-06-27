import { faker } from "@faker-js/faker";
import { Game, Result } from "../model/game";

export const mockGame: () => Game = () => {
  const whoWon = faker.helpers.maybe(() =>
    faker.helpers.arrayElement<Result>(["home", "away", "draw"])
  );

  return {
    campeonato: faker.commerce.productName(),
    created_at: faker.date.past(),
    updated_at: faker.date.past(),
    dataTermino: faker.date.future(),
    id: faker.datatype.number(),
    limiteAposta: faker.date.future(),
    oddTeamAway: faker.datatype.number({ max: 100, min: 0 }),
    oddTeamHome: faker.datatype.number({ max: 100, min: 0 }),
    oddTie: faker.datatype.number({ max: 100, min: 0 }),
    teamAway: {
      id: faker.datatype.number(),
      nomeTeam: faker.commerce.productName(),
      paisDeOrigem: faker.address.country(),
    },
    teamHome: {
      id: faker.datatype.number(),
      nomeTeam: faker.commerce.productName(),
      paisDeOrigem: faker.address.country(),
    },
    resultBet: whoWon,
  };
};
