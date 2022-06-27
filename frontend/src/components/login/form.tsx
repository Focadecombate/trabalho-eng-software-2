import {
  Button,
  Container,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import { submitForm, FormData, ErrorObject } from "./submit";
import { ShowPassword } from "./showPassword";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<ErrorObject<FormData>>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigate();

  return (
    <Container maxWidth="md">
      <form
        noValidate
        onSubmit={async (event) =>
          await submitForm(event, setError, { email, password }, navigation)
        }
      >
        <Grid
          spacing={2}
          container
          alignItems="center"
          justifyContent="center"
          justifyItems="center"
        >
          <Grid item xs={12}>
            <Typography variant="h2">Login</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email"
              placeholder="Digite seu email"
              type="email"
              error={error?.email?.length > 0 ?? false}
              helperText={error?.email}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="password"
              InputProps={{
                endAdornment: (
                  <ShowPassword
                    showPassword={showPassword}
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ),
              }}
              label="Senha"
              error={error?.password?.length > 0 ?? false}
              helperText={error?.password}
              placeholder="Digite sua senha"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" fullWidth type="submit">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
