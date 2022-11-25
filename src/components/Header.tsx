import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

interface PropsFromState {}
  
  interface propsFromDispatch {}
  
  type AllProps = PropsFromState & propsFromDispatch;

const Header: React.FC<AllProps> = () => {
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

export default Header
