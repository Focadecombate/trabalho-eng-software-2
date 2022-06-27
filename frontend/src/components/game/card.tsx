import { Game } from "@/model/game";
import { useNavigate } from "react-router-dom";
import { CardContent, Typography, Card } from "@mui/material";

interface Props {
  game: Game;
}

export function GameCard({ game }: Props) {
  const navigation = useNavigate();

  return (
    <Card
      sx={{
        minWidth: { md: 275, xs: "40vw" },
        height: "100%",
        cursor: "pointer",
      }}
      onClick={() => {
        navigation(`/bet/${game.id}`);
      }}
    >
      <CardContent
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {game.campeonato}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {game.teamHome.nomeTeam}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          vs
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {game.teamAway.nomeTeam}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Chance de {game.teamHome.nomeTeam} {game.oddTeamHome}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Chance de {game.teamAway.nomeTeam} {game.oddTeamAway}%
        </Typography>
        <Typography variant="body2" color="text.secondary">Chance de Empate {game.oddTie}%</Typography>
      </CardContent>
    </Card>
  );
}
