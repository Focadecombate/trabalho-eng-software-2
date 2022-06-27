import { Divider, Grid, Paper, Typography } from "@mui/material";
import { DoBet } from "./doBet";
import { TitleAndPercentage } from "./titleAndPercentage";

export interface Team {
  name: string;
  odd: number;
  id: number;
}

interface Props {
  home: Team;
  away: Team;
  tieOdd: number;
  isClosed: boolean;
  difference: number;
}

export function BetInfo({ home, away, tieOdd, difference, isClosed }: Props) {
  return (
    <Grid component={Paper} p={2} item xs={12} md={6} container>
      <TitleAndPercentage name={home.name} odd={home.odd} />
      <TitleAndPercentage name="Empate" odd={tieOdd} />
      <TitleAndPercentage name={away.name} odd={away.odd} />

      <Grid item xs={12} p={1}>
        <Divider />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5">
          {isClosed ? "Jogo Fechado" : `Fecha em ${difference} dias`}
        </Typography>
      </Grid>

      <Grid item xs={12} p={1}>
        <Divider />
      </Grid>

      <Grid item xs={12}>
        <DoBet homeName={home.name} awayName={away.name} />
      </Grid>
    </Grid>
  );
}
