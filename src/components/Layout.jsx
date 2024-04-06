import { Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};
