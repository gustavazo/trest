import * as React from "react"
import { Container, AppBar, Toolbar, List, ListItem, ListItemText, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Home } from "@material-ui/icons"  //


const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`,
        width: `100%`,
       
         
    },
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
      
    },
    linkText: {
      textDecoration: `none`,
      //textTransform: `uppercase`,
      
      fontFamily: `Gotham, sans- serif`,
      color: "#fff",
      fontWeight: "100"
    }
  });

const navLinks = [
    { title: `Inicio`, path: `/#home` },
    { title: `Promos`, path: `#promos` },
    { title: `Servicios`, path: `/#servicios` },
    { title: `Sobre nos`, path: `/#sobreNos` },
    { title: `Contacto`, path: `/#footer` },
  ]
const Header = () => {
  const classes = useStyles();  
  return (
    <AppBar position="fixed" style={{backgroundColor: `black`}}>
      <Toolbar>
      <Container className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
            <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                    <ListItem button>
                    <ListItemText primary={title} />
                    </ListItem>
                </a>
                ))}
            </List>
        </Container>      
      </Toolbar>
    </AppBar>
  )
}
export default Header