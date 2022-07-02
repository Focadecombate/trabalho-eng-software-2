import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../components/pageContainer";
import { generateUser } from "../mock/data";

export async function SendToApi(value: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, 1000);
  });
}

export function AddFunds() {
  const { data, error, isLoading } = useQuery("/user", generateUser);

  const [value, setValue] = useState(0);

  const navigation = useNavigate();

  if (isLoading) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  if (error || !data) {
    return <Typography variant="h5">Erro não esperado...</Typography>;
  }

  return (
    <PageContainer maxWidth="lg">
      <form onSubmit={async (event) => {
        event.preventDefault();
        await SendToApi(value)
        navigation("/");
      }}>
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

          <Grid item xs={12}>
            <TextField
              label="Valor"
              type="number"
              onChange={({ target }) => setValue(parseFloat(target.value))}
              fullWidth
              value={value}
            />
          </Grid>

          <Grid item xs={4}>
            <Button variant="contained" fullWidth type="submit">
              Adicionar Fundos
            </Button>
          </Grid>
        </Grid>
      </form>
    </PageContainer>
  );
}
