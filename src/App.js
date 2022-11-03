import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./page/Home/Home";
import List from "./components/List/Item";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./components/Login/Login";
import { getPassword } from "./util/getPassword";

function App() {
  const [queryClient] = useState(new QueryClient());
  const [isPassword, setIsPassword] = useState(!!getPassword());
  return (
    <QueryClientProvider client={queryClient}>
      {!isPassword ? (
        <Login setIsPassword={setIsPassword} />
      ) : (
        <Home setIsPassword={setIsPassword} />
      )}
      {/* <List /> */}
    </QueryClientProvider>
  );
}

export default App;
