import { Route, Routes } from "react-router-dom";
import { LoginPage } from "@/page/login";
import { HomePage } from "@/page/homepage";
import { QueryClient, QueryClientProvider } from "react-query";
import { AddFunds } from "./page/addFunds";
import { User } from "./page/user";
import { Bet } from "./page/bet";
import { ResponsiveAppBar } from "./components/sideMenu";

export function App() {
  const queryClient = new QueryClient({});

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ResponsiveAppBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/bet/:gameId" element={<Bet />} />
          <Route path="/user/funds" element={<AddFunds />} />
          <Route path="/user/bets" element={<AddFunds />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}
