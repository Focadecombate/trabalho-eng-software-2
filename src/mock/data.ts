import { mockGame } from "./game"
import { mockUser } from "./user"

export const generateGames = () => {
  const array = new Array(50).fill(0).map(() => mockGame())

  return Promise.resolve(array)
}

export const generateGame = () => {
  return Promise.resolve(mockGame())
}

export const generateUser = () => {
  return Promise.resolve(mockUser())
}