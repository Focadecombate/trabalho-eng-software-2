export type Result = 'home' | 'away' | 'draw';

export interface Game {
  id: number;
  teamHome: {
    id: number;
    nomeTeam: string;
    paisDeOrigem: string;
  };
  teamAway: {
    id: number;
    nomeTeam: string;
    paisDeOrigem: string;
  };
  resultBet?: Result;
  oddTeamHome: number;
  oddTeamAway: number;
  oddTie: number;
  campeonato: string;
  created_at: Date;
  updated_at: Date;
  limiteAposta: Date;
  dataTermino: Date;
}
