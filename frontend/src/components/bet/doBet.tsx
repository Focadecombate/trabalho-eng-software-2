import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Grid,
  TextField,
} from "@mui/material";

interface Props {
  homeName: string;
  awayName: string;
}

export function DoBet({ awayName, homeName }: Props) {
  return (
    <Grid component="form" container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <FormControl>
          <RadioGroup
            aria-labelledby="select-bet-radio-buttons"
            defaultValue="home"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="home"
              control={<Radio />}
              label={homeName}
            />
            <FormControlLabel value="tie" control={<Radio />} label="Empate" />
            <FormControlLabel
              value="away"
              control={<Radio />}
              label={awayName}
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          name="betAmount"
          id="betAmount"
          label="Valor"
          placeholder="Digite o valor da sua aposta"
          variant="outlined"
        ></TextField>
      </Grid>

      <Grid item xs={12}>
        <Button fullWidth variant="contained" color="primary">
          Apostar
        </Button>
      </Grid>
    </Grid>
  );
}
