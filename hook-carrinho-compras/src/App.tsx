import { ToastContainer } from "react-toastify";

import { AppRoutes } from "./AppRoutes";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <AppRoutes />
      <ToastContainer autoClose={3000} />
    </>
  );
}
