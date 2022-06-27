import { Game } from "@/model/game";
import { Grid, Typography } from "@mui/material";
import { GameCard } from "../game/card";

interface Props {
  title: string;
  games: Game[];
}

export function Category({ title, games }: Props) {

  const maxArray = Math.floor(Math.random() * (games.length - 0 + 1) + 0) 

  return (
    <Grid container spacing={2} mt="2vh">
      <Grid item xs={12}>
        <Typography color="white" variant="h3">
          {title}
        </Typography>
      </Grid>

      {games.slice(0, maxArray).map((game) => (
        <Grid item xs={6} md={3} key={game.id}>
          <GameCard game={game} />
        </Grid>
      ))}
    </Grid>
  );
}
