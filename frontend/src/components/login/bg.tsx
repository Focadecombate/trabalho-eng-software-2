import { Paper } from "@mui/material";
import { PropsWithChildren } from "react";

export function LoginBg({ children }: PropsWithChildren) {
  return <Paper style={{ padding: "2%" }}>{children}</Paper>;
}
