import { Box, Grid, Typography } from "@mui/material";

interface Props {
  home: string;
  away: string;
}

export function BetTitle({ home, away }: Props) {
  return (
    <Grid component={Box} p={4} item xs={12} md={6} container>
      <Typography color="HighlightText" variant="h3" component="p" width="100%">
        {home}
      </Typography>
      <Typography
        color="HighlightText"
        variant="h3"
        component="p"
        width="100%"
        sx={{ textAlign: "center" }}
      >
        vs
      </Typography>
      <Typography color="HighlightText" variant="h3" component="p" width="100%">
        {away}
      </Typography>
    </Grid>
  );
}
