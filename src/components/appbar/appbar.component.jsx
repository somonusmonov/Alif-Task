import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { AppBar, Container, Typography } from "@mui/material";

export const Appbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <AppBar data-aos="fade-down" position="static" color="secondary">
        <Container maxWidth="lg">
          <Typography variant="h6" sx={{ fontWeight: "bold", py: 2 }}>
            Alif task
          </Typography>
        </Container>
      </AppBar>
    </>
  );
};
