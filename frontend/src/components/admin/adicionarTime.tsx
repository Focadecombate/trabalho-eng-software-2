import { PageContainer } from "@/components/pageContainer";
import { Grid, TextField, Typography, Paper, Button } from "@mui/material";

export function AdicionarTime() {
  return (
    <PageContainer maxWidth="lg">
      <form  style={{minWidth: '100%'}}>
        <Grid
          container
          spacing={2}
          component={Paper}
          p={4}
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Typography variant="h5">Adicionar Time</Typography>
          </Grid>

          <Grid item xs={6}>
            <TextField fullWidth label="Nome do time" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Pais de origem" />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" fullWidth type="submit">
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </form>
    </PageContainer>
  );
}
