import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <header>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Starwars Universe</Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}
