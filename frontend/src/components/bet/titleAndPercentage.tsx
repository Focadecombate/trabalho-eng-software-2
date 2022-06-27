import { Grid, Typography } from "@mui/material";
import { Team } from "./info";

type Props = {} & Omit<Team, "id">;

export function TitleAndPercentage({ name, odd }: Props) {
  return (
    <Grid xs={12} item container>
      <Grid item xs={6}>
        <Typography variant="h5">{name}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h5">{odd}% </Typography>
      </Grid>
    </Grid>
  );
}
