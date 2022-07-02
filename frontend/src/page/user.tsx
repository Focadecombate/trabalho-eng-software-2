import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../components/pageContainer";
import { generateUser } from "../mock/data";

export function User() {
  const { data, error, isLoading } = useQuery("/user", generateUser);

  const navigation = useNavigate();

  if (isLoading) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  if (error || !data) {
    return <Typography variant="h5">Erro não esperado...</Typography>;
  }

  return (
    <PageContainer maxWidth="lg">
      <Grid
        container
        spacing={2}
        component={Paper}
        p={4}
        justifyContent="center"
      >
        <Grid
          item
          container
          xs={12}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            sx={{
              width: 128,
              height: 128,
              display: "flex",
            }}
            alt={data.nomeDoUsuario}
            src={data.profile}
          />
          <Typography variant="h3">Olá {data.nomeDoUsuario}</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField label="email" fullWidth disabled value={data.email} />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Nome"
            fullWidth
            disabled
            value={data.nomeDoUsuario}
          />
        </Grid>

        <Grid item xs={4}>
          <Button
            variant="contained"
            fullWidth
            type="button"
            onClick={() => navigation("/user/funds")}
          >
            Adicionar Fundos
          </Button>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
