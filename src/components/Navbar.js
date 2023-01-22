import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AnchorLink from "react-anchor-link-smooth-scroll-v2";


const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        AbdulRahman
      </Typography>
      <Divider />
      <List>
      <Box sx={{ display: { xs: 'flex', sm: 'none' },gap:3,flexDirection:"column" }}>
        <AnchorLink href="#Education" className="text">
        <Typography
            variant="p"
            sx={{ fontWeight:600 }}
          >
            Education
          </Typography>
        </AnchorLink>
          <AnchorLink href="#About" className="text">
          <Typography
            variant="p"
            sx={{ fontWeight:600}}
          >
            About
          </Typography>
          </AnchorLink>
          <AnchorLink href="#Projects" className="text"><Typography
            variant="p"
            sx={{ fontWeight:600}}
          >
            Projects
          </Typography>
          </AnchorLink>
          <AnchorLink href="#Skills" className="text">
          <Typography
            variant="p"
            sx={{ fontWeight:600}}
          >
            Skills
          </Typography>
          </AnchorLink>
          <AnchorLink href='#Form' className="text">
          <Typography
            variant="p"
            sx={{ fontWeight:600}}
          >
            Contact
          </Typography>
          </AnchorLink>
          </Box>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar sx={{backgroundColor:"#F6F6F6"}} component="nav">
        <Toolbar sx={{ display: {xs:'flex'},justifyContent:{xs:"space-between"} }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{color:"black"}}/>
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 0, display: { xs: 'block', sm: 'block' },justifyContent:{xs:"space-between",sm:"none"},color:"black" }}
          >
            AbdulRahman
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' },gap:3 }}>
          <AnchorLink href="#Education" className="text">
        <Typography
            variant="p"
            sx={{ fontWeight:600 }}
          >
            Education
          </Typography>
        </AnchorLink>
          <AnchorLink href="#About" className="text">
          <Typography
            variant="p"
            sx={{ fontWeight:600}}
          >
            About
          </Typography>
          </AnchorLink>
          <AnchorLink href="#Projects" className="text"><Typography
            variant="p"
            sx={{ fontWeight:600}}
          >
            Projects
          </Typography>
          </AnchorLink>
          <AnchorLink href="#Skills" className="text">
          <Typography
            variant="p"
            sx={{ fontWeight:600}}
          >
            Skills
          </Typography>
          </AnchorLink>
          <AnchorLink href='#Form' className="text">
          <Typography
            variant="p"
            sx={{ fontWeight:600}}
          >
            Contact
          </Typography>
          </AnchorLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;