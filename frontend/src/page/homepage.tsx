import { Box, Grid, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { Category } from "@/components/category";
import { PageContainer } from "../components/pageContainer";
import { generateGames } from "../mock/data";

export function HomePage() {
  const { data, error, isLoading } = useQuery("/bet", generateGames);

  if (isLoading) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h5">Erro não esperado...</Typography>;
  }

  if (!data) {
    return (
      <PageContainer maxWidth="lg">
        <Box p={5}>
          <Typography color="white" variant="h3">
            Apostas
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Typography color="white" variant="h3">
            Sem apostas cadastradas
          </Typography>
        </Grid>
      </PageContainer>
    );
  }

  return (
    <PageContainer maxWidth="lg">
      <Category title="Futebol" games={data} />
      <Category title="Basquete" games={data} />
    </PageContainer>
  );
}
