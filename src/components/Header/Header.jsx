import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import logo from '../../images/coronavirus_logo.png';
import styles from './Header.module.css';
import 'fontsource-roboto';

const Header = () => {

  return (
    <AppBar position="static" className={styles.animBar} >
      <Toolbar>
        <IconButton href="/" edge="start" style={{color: "white"}}>
          <img className={styles.logo} src={logo} alt="logo"/>
          <Typography variant="h5">COVID-19 Tracker</Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
