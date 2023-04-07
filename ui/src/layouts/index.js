import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Grid>
      <Grid item>
        <Navbar />
      </Grid>

      <Grid item
        sx={{
          minWidth: "100%",
          minHeight: "calc(100vh - 64px - 56px)",
        }}
      >
        <Outlet /> {/* Outlet is not a “real” Component, it is imported from react-router-dom. it will be replaced by the element rendered by the route */}
      </Grid>

      <Grid item sx={{ width: '100%', position: 'relative', bottom: 0 }}>
        <Footer />
      </Grid>

    </Grid>
  )
}
export default Layout