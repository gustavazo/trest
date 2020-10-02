import * as React from "react"
import { Container, AppBar, Toolbar, List, ListItem, ListItemText } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`
    }
  });

const navLinks = [
    { title: `about us`, path: `/about-us` },
    { title: `product`, path: `/product` },
    { title: `blog`, path: `/blog` },
    { title: `contact`, path: `/contact` },
    { title: `faq`, path: `/faq` },
  ]
const Header = () => {
  const classes = useStyles();  
  return (
    <AppBar position="fixed">
      <Toolbar>
      <Container className={classes.navbarDisplayFlex}>
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