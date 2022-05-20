import { AppBar, Typography, Grid, Toolbar } from "@mui/material";
import SearchBar from "../../features/search/SearchBar";
import React from "react";

function NavBar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems="center">
          <Grid item xs={1} sm={2} md={4}>
            <Typography sx={{ typography: { xs:'h6', sm: 'h5', md: 'h4' } }}>Material Reddit</Typography>
          </Grid>
          <Grid item xs={3} sm={6} md={8} container justifyContent='flex-end'>
            <SearchBar />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
