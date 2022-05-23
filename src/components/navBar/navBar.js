import { AppBar, Typography, Grid, Toolbar } from "@mui/material";
import SearchBar from "../../features/search/SearchBar";
import React from "react";

function NavBar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{display:'flex', flexDirection: 'row', justifyContent:'space-between'}}>
          <Typography align='left' sx={{ typography: { xs:'h6', sm: 'h5', md: 'h4' }, display:'flex'}}>Material Reddit</Typography>
          <SearchBar />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
