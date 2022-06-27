import { Grid, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { differenceInDays } from "date-fns";

import { PageContainer } from "../components/pageContainer";
import { generateGame } from "../mock/data";
import { BetTitle } from "../components/bet/title";
import { BetInfo } from "../components/bet/info";

export function Bet() {
  const { data, error, isLoading } = useQuery("/game", generateGame);

  if (isLoading) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h5">Not Expected Error</Typography>;
  }

  if (!data) {
    return <Typography variant="h5">Não encontrado</Typography>;
  }

  const difference = differenceInDays(data.dataTermino, new Date());

  const isClosed = difference < 1;

  return (
    <PageContainer maxWidth="lg">
      <Grid container spacing={2} justifyContent="space-evenly">
        <BetTitle home={data.teamHome.nomeTeam} away={data.teamAway.nomeTeam} />
        <BetInfo
          home={{
            name: data.teamHome.nomeTeam,
            odd: data.oddTeamHome,
            id: data.teamHome.id,
          }}
          away={{
            name: data.teamAway.nomeTeam,
            odd: data.oddTeamAway,
            id: data.teamHome.id,
          }}
          tieOdd={data.oddTie}
          isClosed={isClosed}
          difference={difference}
        />
      </Grid>
    </PageContainer>
  );
}
