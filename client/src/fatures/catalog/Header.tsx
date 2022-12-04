import { AppBar, Badge, Box, Button, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
export interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}
const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact"},
]
export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" component={NavLink} to={'/'} sx={{ color: 'inherit', textDecoration: 'none' }}>
              RE-STORE
            </Typography>
            <Switch checked={darkMode} onChange={event => handleThemeChange()} />
          </Box>
          <List sx={{ display: 'flex' }}>
            {
              midLinks.map(({ title, path }, index) => ((
                <ListItem key={index} to={path} component={NavLink}
                  sx={{
                    color: 'inherit', typography: 'h6', '&:hover': {
                      color: 'grey.500'
                    }, '&.active': { color: 'text.secondary' }
                  }}>
                  {title.toUpperCase()}
                </ListItem>
              )))
            }
          </List>
          <Box>
            <IconButton size='large' color='inherit'>
              <Badge badgeContent={4} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Register</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}