import { FormEvent } from "react";

export interface FormData {
  email: string;
  password: string;
}

export type ErrorObject<T> = Partial<Record<keyof T, string>>;

export async function submitForm(
  event: FormEvent<HTMLFormElement>,
  setError: (error: ErrorObject<FormData>) => void,
  { email, password }: FormData,
  navigate?: (path: string) => void
) {
  event.preventDefault();

  setError({});

  if (email === "") {
    setError({
      email: "Email é obrigatório",
    });
    return;
  }

  if (!email.includes("@")) {
    setError({
      email: "Email inválido",
    });
    return;
  }

  if (password === "") {
    setError({
      password: "Senha é obrigatória",
    });
    return;
  }

  if (password.length < 6) {
    setError({
      password: "Senha deve ter no mínimo 6 caracteres",
    });
    return;
  }

  if (navigate) {
    navigate("/");
  }
}
