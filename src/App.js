import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./page/Home/Home";
import List from "./components/List/Item";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./components/Login/Login";
import { getUserName } from "./util/getUserName";

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    setLogin(getUserName());
  }, []);

  const [queryClient] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Layout
        justify={localStorage.getItem("username") ? "space-between" : "center"}
      >
        {!login ? <Login setLogin={setLogin} /> : <Home />}
        {/* <List /> */}
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
