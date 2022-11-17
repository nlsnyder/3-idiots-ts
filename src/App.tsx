import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import MainNav from "./components/navigation/MainNav";
import Footer from "./components/layout/Footer";
import Home from "./pages/home/Home";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 86400000,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNav />
        <Routes>
          <Route
            path="/home"
            element={
              <QueryClientProvider client={queryClient}>
                <Home />
              </QueryClientProvider>
            }
          />
          <Route path="/" element={<Navigate to={"/home"} replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
