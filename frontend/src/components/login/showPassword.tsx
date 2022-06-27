import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

interface Props {
  showPassword: boolean;
  onClick: () => void;
}

export function ShowPassword({ showPassword, onClick }: Props) {
  return (
    <InputAdornment
      position="start"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {showPassword ? <Visibility /> : <VisibilityOff />}
    </InputAdornment>
  );
}
