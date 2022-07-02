import { PageContainer } from "@/components/pageContainer";
import { Grid, TextField, Typography, Paper, Button } from "@mui/material";

export function AdicionarJogo() {
  return (
    <PageContainer maxWidth="lg">
      <form style={{ minWidth: "100%" }}>
        <Grid
          container
          spacing={2}
          component={Paper}
          p={4}
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Typography variant="h5">Adicionar Jogo</Typography>
          </Grid>

          <Grid item xs={6}>
            <TextField fullWidth label="Categoria" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Campeonato" />
          </Grid>
          <Grid item xs={12} />

          <Grid item xs={6}>
            <TextField fullWidth label="Time da casa" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth type="number" label="Chance do time da casa" />
          </Grid>
          <Grid item xs={12} />

          <Grid item xs={6}>
            <TextField fullWidth label="Time visitante" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="number"
              label="Chance do time visitante"
            />
          </Grid>
          <Grid item xs={12} />

          <Grid item xs={6}>
            <TextField fullWidth type="number" label="Chance de empate" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth type="number" label="Limite de aposta" />
          </Grid>
          <Grid item xs={12} />

          <Grid item xs={6}>
            <TextField fullWidth type="datetime-local" label="Data de inicio" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="datetime-local"
              label="Data de termino"
            />
          </Grid>

          <Grid item xs={12} />

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
