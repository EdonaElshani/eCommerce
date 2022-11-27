import { AppBar, Box, Button, FormControlLabel, FormGroup, IconButton, Switch, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
export interface Props{
  darkMode: boolean;
  handleThemeChange: () => void;
}
export default function Header({darkMode, handleThemeChange }: Props) { 
  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 4 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Re-Store
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Switch checked={darkMode} onChange={event => handleThemeChange()}/>} label="Theme" />
            </FormGroup>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* {theme = true}
      {alert(theme)} */}
      
    </>
  )
}