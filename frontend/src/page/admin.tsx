import { AdicionarJogo } from "../components/admin/adicionarJogo";
import { AdicionarTime } from "../components/admin/adicionarTime";

export function AdminPage() {
  return (
    <>
      <AdicionarTime />
      <AdicionarJogo />
    </>
  );
}
